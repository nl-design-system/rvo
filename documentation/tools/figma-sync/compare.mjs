#!/usr/bin/env node
// Vergelijkt alle variant-combinaties (cartesian product van axes) van een
// component met de bijbehorende Figma-instances in een COMPONENT_SET.
//
// Twee lagen:
//   1. Visueel: pixelmatch op de twee PNG's
//   2. Properties: getComputedStyle uit Storybook vs Figma node-API
//
// Output per variant: <variant>-storybook.png, <variant>-figma.png,
// <variant>-diff.png. Aggregaat: report.md + result.json.

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import sharp from 'sharp';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const STORYBOOK_URL = process.env.STORYBOOK_URL ?? 'http://localhost:6006';
const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FIGMA_SCALE = 2;
const SIZE_TOLERANCE = 1;

const componentName = process.argv[2];
if (!componentName) {
  console.error('Usage: compare.mjs <componentName>');
  process.exit(2);
}
if (!FIGMA_TOKEN) {
  console.error('FIGMA_TOKEN env var is required');
  process.exit(2);
}

const config = JSON.parse(await fs.readFile(path.join(__dirname, 'components.json'), 'utf8'));
const component = config.components[componentName];
if (!component) {
  console.error(`Unknown component: ${componentName}`);
  process.exit(2);
}

const defaultThreshold = config.threshold ?? 0.9;
const targetSelector = component.targetSelector ?? '.rvo-button';
const outputDir = path.join(__dirname, 'output', componentName);
await fs.mkdir(outputDir, { recursive: true });

// ---------- Variants opbouwen ----------

function cartesianProduct(axes) {
  const keys = Object.keys(axes);
  return keys.reduce((acc, key) => {
    const values = axes[key];
    if (acc.length === 0) return values.map((v) => ({ [key]: v }));
    return acc.flatMap((combo) => values.map((v) => ({ ...combo, [key]: v })));
  }, []);
}

function resolvePlaceholder(name, combo, valueMaps) {
  if (name in combo) return combo[name];
  const vm = valueMaps?.[name];
  if (vm) {
    const axisValue = combo[vm.axis];
    if (axisValue == null) throw new Error(`valueMap '${name}' refers to unknown axis '${vm.axis}'`);
    if (!(axisValue in vm.values)) {
      throw new Error(`valueMap '${name}' has no entry for ${vm.axis}=${axisValue}`);
    }
    return vm.values[axisValue];
  }
  throw new Error(`Cannot resolve placeholder {${name}}`);
}

function renderTemplate(template, combo, valueMaps) {
  return template.replace(/\{(\w+)\}/g, (_, name) => resolvePlaceholder(name, combo, valueMaps));
}

function globToRegex(g) {
  const escaped = g.replace(/[.+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp('^' + escaped.replace(/\*/g, '.*') + '$');
}

function thresholdForVariant(variantName) {
  const patterns = component.thresholds ?? {};
  for (const [pattern, value] of Object.entries(patterns)) {
    if (globToRegex(pattern).test(variantName)) return value;
  }
  return defaultThreshold;
}

function thresholdNoteForVariant(variantName) {
  const notes = component.thresholdNotes ?? {};
  for (const [pattern, note] of Object.entries(notes)) {
    if (globToRegex(pattern).test(variantName)) return note;
  }
  return null;
}

function viewportWidthForVariant(variantName) {
  const widths = component.screenshotViewportWidths ?? {};
  for (const [pattern, value] of Object.entries(widths)) {
    if (globToRegex(pattern).test(variantName)) return value;
  }
  return component.screenshotViewportWidth ?? 1280;
}

function buildVariants() {
  if (component.variants) {
    return Object.entries(component.variants).map(([name, v]) => ({
      name,
      args: v.args,
      storybookId: v.storybookId ?? null,
      figmaName: null,
      figmaNodeId: v.figmaNodeId,
      threshold: v.threshold ?? thresholdForVariant(name),
      thresholdNote: thresholdNoteForVariant(name),
      screenshotViewportWidth: v.screenshotViewportWidth ?? viewportWidthForVariant(name),
      screenshotSelector: v.screenshotSelector ?? null,
      openSelector: v.openSelector ?? null,
      focusSelector: v.focusSelector ?? null,
    }));
  }
  if (!component.axes) {
    throw new Error('Component config must have either `variants` or `axes`');
  }
  const combos = cartesianProduct(component.axes);
  return combos.map((combo) => {
    const name = Object.values(combo).join('-');
    const args = renderTemplate(component.argsPattern, combo, component.valueMaps);
    const figmaName = renderTemplate(component.figmaNamePattern, combo, component.valueMaps);
    return {
      name,
      args,
      figmaName,
      figmaNodeId: null,
      threshold: thresholdForVariant(name),
      thresholdNote: thresholdNoteForVariant(name),
      screenshotViewportWidth: viewportWidthForVariant(name),
    };
  });
}

const variants = buildVariants();

// ---------- Figma fetch met retry bij 429 ----------

async function figmaFetch(url, retries = 4) {
  const doFetch = () => fetch(url, { headers: { 'X-Figma-Token': FIGMA_TOKEN } });
  for (let i = 0; i < retries; i++) {
    const res = await doFetch();
    if (res.status !== 429) return res;
    const wait = (i + 1) * 8000;
    console.log(`  Figma 429 — wacht ${wait / 1000}s (poging ${i + 1}/${retries})...`);
    await new Promise((r) => setTimeout(r, wait));
  }
  return doFetch();
}

// ---------- Figma COMPONENT_SET children pre-fetchen voor name-lookup ----------

async function fetchFigmaNameMap() {
  if (!component.figmaComponentSetId) return null;
  const url = `https://api.figma.com/v1/files/${config.figmaFileId}/nodes?ids=${encodeURIComponent(
    component.figmaComponentSetId,
  )}`;
  const res = await figmaFetch(url);
  if (!res.ok) throw new Error(`Figma nodes API (set): ${res.status} ${res.statusText}`);
  const data = await res.json();
  const setNode = data.nodes?.[component.figmaComponentSetId]?.document;
  if (!setNode) throw new Error(`COMPONENT_SET ${component.figmaComponentSetId} not found`);
  const map = new Map();
  function walk(n) {
    if (n.type === 'COMPONENT') map.set(n.name, n.id);
    for (const c of n.children ?? []) walk(c);
  }
  walk(setNode);
  return map;
}

const nameMap = await fetchFigmaNameMap();
if (nameMap) {
  for (const v of variants) {
    if (v.figmaNodeId) continue;
    const id = nameMap.get(v.figmaName);
    if (!id) throw new Error(`Geen Figma-COMPONENT met naam '${v.figmaName}' in set ${component.figmaComponentSetId}`);
    v.figmaNodeId = id;
  }
}

console.log(`[${componentName}] ${variants.length} variant(en):`, variants.map((v) => v.name).join(', '));

// ---------- Storybook: screenshot + getComputedStyle ----------

async function captureStorybook(browser, variant) {
  const vpWidth = variant.screenshotViewportWidth ?? 1280;
  const page = await browser.newPage({ viewport: { width: vpWidth, height: 800 } });
  const storyId = variant.storybookId ?? component.storybookId;
  const argsParam = variant.args ? `&args=${encodeURIComponent(variant.args)}` : '';
  const url = `${STORYBOOK_URL}/iframe.html?id=${storyId}${argsParam}&viewMode=story`;
  await page.goto(url, { waitUntil: 'load', timeout: 30000 });
  await page.waitForSelector('#storybook-root > *', { timeout: 10000 });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(200);

  if (variant.openSelector) {
    await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      if (el) el.open = true;
    }, variant.openSelector);
    await page.waitForTimeout(100);
  }

  if (variant.focusSelector) {
    await page.focus(variant.focusSelector);
    await page.waitForTimeout(100);
  }

  const screenshotSel = variant.screenshotSelector ?? targetSelector;
  const raw = screenshotSel
    ? await page.locator(screenshotSel).first().screenshot()
    : await page.screenshot({ fullPage: true });

  const propsSel = variant.screenshotSelector ?? targetSelector;
  const props = await page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const cs = getComputedStyle(el);
    const rect = el.getBoundingClientRect();
    return {
      width: rect.width,
      height: rect.height,
      borderRadius: parseFloat(cs.borderTopLeftRadius) || 0,
      borderWidth: parseFloat(cs.borderTopWidth) || 0,
      borderColor: cs.borderTopColor,
      backgroundColor: cs.backgroundColor,
      color: cs.color,
      fontSize: parseFloat(cs.fontSize) || 0,
      fontWeight: Number(cs.fontWeight) || 0,
      fontFamily: cs.fontFamily,
      paddingTop: parseFloat(cs.paddingTop) || 0,
      paddingRight: parseFloat(cs.paddingRight) || 0,
      paddingBottom: parseFloat(cs.paddingBottom) || 0,
      paddingLeft: parseFloat(cs.paddingLeft) || 0,
    };
  }, propsSel);
  await page.close();

  if (!props) throw new Error(`Selector '${targetSelector}' niet gevonden voor variant '${variant.name}'`);

  const pngPath = path.join(outputDir, `${variant.name}-storybook.png`);
  // Element screenshots zijn al exact geknipt; alleen full-page screenshots hebben
  // witte trim nodig (en alleen als de achtergrond wit is).
  const sbImg = screenshotSel ? sharp(raw) : sharp(raw).trim();
  await sbImg.png().toFile(pngPath);
  return { pngPath, props };
}

// ---------- Figma: PNG + properties ----------

async function fetchFigmaPng(variant) {
  const url = `https://api.figma.com/v1/images/${config.figmaFileId}?ids=${encodeURIComponent(
    variant.figmaNodeId,
  )}&scale=${FIGMA_SCALE}&format=png`;
  const res = await figmaFetch(url);
  if (!res.ok) throw new Error(`Figma image API: ${res.status} ${res.statusText} (${variant.name})`);
  const data = await res.json();
  const imgUrl = data.images?.[variant.figmaNodeId];
  if (!imgUrl) throw new Error(`No image URL voor ${variant.figmaNodeId} (${variant.name})`);
  const imgRes = await fetch(imgUrl);
  if (!imgRes.ok) throw new Error(`Download Figma PNG faalde voor ${variant.name}: ${imgRes.status}`);
  const buf = Buffer.from(await imgRes.arrayBuffer());
  const outPath = path.join(outputDir, `${variant.name}-figma.png`);
  const trimmed = await sharp(buf).trim().toBuffer();
  const meta = await sharp(trimmed).metadata();
  await sharp(trimmed)
    .resize({ width: Math.round(meta.width / FIGMA_SCALE) })
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .png()
    .toFile(outPath);
  return outPath;
}

function figmaColorToCss(c) {
  if (!c) return null;
  const r = Math.round(c.r * 255);
  const g = Math.round(c.g * 255);
  const b = Math.round(c.b * 255);
  const a = c.a == null ? 1 : c.a;
  if (a === 0) return 'rgba(0, 0, 0, 0)';
  if (a === 1) return `rgb(${r}, ${g}, ${b})`;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

async function fetchFigmaProps(variant) {
  const url = `https://api.figma.com/v1/files/${config.figmaFileId}/nodes?ids=${encodeURIComponent(
    variant.figmaNodeId,
  )}`;
  const res = await figmaFetch(url);
  if (!res.ok) throw new Error(`Figma nodes API: ${res.status} ${res.statusText} (${variant.name})`);
  const data = await res.json();
  const node = data.nodes[variant.figmaNodeId]?.document;
  if (!node) throw new Error(`Figma node ${variant.figmaNodeId} not found`);

  const text = node.children?.find((c) => c.type === 'TEXT');
  const fillSolid = node.fills?.find((f) => f.type === 'SOLID' && f.visible !== false);
  const strokeSolid = node.strokes?.find((s) => s.type === 'SOLID' && s.visible !== false);
  const textFillSolid = text?.fills?.find((f) => f.type === 'SOLID' && f.visible !== false);

  return {
    width: node.absoluteBoundingBox?.width ?? 0,
    height: node.absoluteBoundingBox?.height ?? 0,
    borderRadius: node.cornerRadius ?? 0,
    borderWidth: strokeSolid ? node.strokeWeight ?? 0 : 0,
    borderColor: strokeSolid ? figmaColorToCss(strokeSolid.color) : 'rgba(0, 0, 0, 0)',
    backgroundColor: fillSolid ? figmaColorToCss(fillSolid.color) : 'rgba(0, 0, 0, 0)',
    color: textFillSolid ? figmaColorToCss(textFillSolid.color) : null,
    fontSize: text?.style?.fontSize ?? 0,
    fontWeight: text?.style?.fontWeight ?? 0,
    fontFamily: text?.style?.fontFamily ?? null,
    paddingTop: node.paddingTop ?? 0,
    paddingRight: node.paddingRight ?? 0,
    paddingBottom: node.paddingBottom ?? 0,
    paddingLeft: node.paddingLeft ?? 0,
  };
}

// ---------- Property-vergelijking ----------

function eqNumber(a, b, tolerance = 0) {
  return Math.abs(a - b) <= tolerance;
}

function normalizeColor(s) {
  if (!s) return s;
  const m = s.match(/rgba?\(([^)]+)\)/);
  if (!m) return s;
  const parts = m[1].split(',').map((x) => x.trim());
  const [r, g, b] = parts.slice(0, 3).map(Number);
  const a = parts[3] != null ? Number(parts[3]) : 1;
  if (a === 0) return 'transparent';
  return a === 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${a})`;
}

function eqColor(a, b) {
  if (a == null && b == null) return true;
  if (a == null || b == null) return false;
  return normalizeColor(a) === normalizeColor(b);
}

function compareProperties(sb, fg) {
  const checks = [
    { key: 'width', label: 'width', cmp: 'num', tol: SIZE_TOLERANCE },
    { key: 'height', label: 'height', cmp: 'num', tol: SIZE_TOLERANCE },
    { key: 'borderRadius', label: 'border-radius', cmp: 'num', tol: 0 },
    { key: 'borderWidth', label: 'border-width', cmp: 'num', tol: 0 },
    { key: 'borderColor', label: 'border-color', cmp: 'color' },
    { key: 'backgroundColor', label: 'background', cmp: 'color' },
    { key: 'color', label: 'text-color', cmp: 'color' },
    { key: 'fontSize', label: 'font-size', cmp: 'num', tol: 0 },
    { key: 'fontWeight', label: 'font-weight', cmp: 'num', tol: 0 },
    { key: 'paddingTop', label: 'padding-top', cmp: 'num', tol: 0 },
    { key: 'paddingRight', label: 'padding-right', cmp: 'num', tol: 0 },
    { key: 'paddingBottom', label: 'padding-bottom', cmp: 'num', tol: 0 },
    { key: 'paddingLeft', label: 'padding-left', cmp: 'num', tol: 0 },
  ];
  const entries = checks.map(({ key, label, cmp, tol }) => {
    const sbVal = sb[key];
    const fgVal = fg[key];
    let match;
    if (cmp === 'num') match = eqNumber(sbVal, fgVal, tol);
    else if (cmp === 'color') match = eqColor(sbVal, fgVal);
    else match = sbVal === fgVal;
    return { key, label, storybook: sbVal, figma: fgVal, match };
  });
  return { entries, allMatch: entries.every((e) => e.match) };
}

// ---------- Pixel-vergelijking ----------

async function placeOnCanvas(filePath, canvasW, canvasH) {
  const flat = await sharp(filePath)
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .png()
    .toBuffer();
  return sharp({
    create: { width: canvasW, height: canvasH, channels: 3, background: { r: 255, g: 255, b: 255 } },
  })
    .composite([{ input: flat, top: 0, left: 0 }])
    .png()
    .toBuffer();
}

async function compareVisual(variantName, sbPath, figmaPath) {
  const [aMeta, bMeta] = await Promise.all([sharp(sbPath).metadata(), sharp(figmaPath).metadata()]);
  const canvasW = Math.max(aMeta.width, bMeta.width);
  const canvasH = Math.max(aMeta.height, bMeta.height);
  const aBuf = await placeOnCanvas(sbPath, canvasW, canvasH);
  const bBuf = await placeOnCanvas(figmaPath, canvasW, canvasH);
  const aPng = PNG.sync.read(aBuf);
  const bPng = PNG.sync.read(bBuf);
  const diff = new PNG({ width: canvasW, height: canvasH });
  const diffPixels = pixelmatch(aPng.data, bPng.data, diff.data, canvasW, canvasH, {
    threshold: 0.2,
    includeAA: false,
  });
  await fs.writeFile(path.join(outputDir, `${variantName}-diff.png`), PNG.sync.write(diff));
  const totalPixels = canvasW * canvasH;
  return { matchPct: 1 - diffPixels / totalPixels, diffPixels, totalPixels };
}

// ---------- Main loop ----------

const browser = await chromium.launch();
const results = [];
try {
  for (const variant of variants) {
    console.log(`[${componentName}/${variant.name}] Storybook + Figma...`);
    const [{ pngPath: sbPath, props: sbProps }, figmaPath, fgProps] = await Promise.all([
      captureStorybook(browser, variant),
      fetchFigmaPng(variant),
      fetchFigmaProps(variant),
    ]);
    const visual = await compareVisual(variant.name, sbPath, figmaPath);
    const { entries: propEntries, allMatch: propsPassed } = compareProperties(sbProps, fgProps);

    const visualPassed = visual.matchPct >= variant.threshold;
    // Visueel is leidend voor pass/fail. Property-mismatches worden in het
    // rapport getoond als info, maar overrulen de visuele pass niet.
    const passed = visualPassed;

    results.push({
      name: variant.name,
      figmaNodeId: variant.figmaNodeId,
      figmaName: variant.figmaName,
      threshold: variant.threshold,
      thresholdNote: variant.thresholdNote ?? null,
      visual: { ...visual, passed: visualPassed },
      properties: { entries: propEntries, passed: propsPassed },
      passed,
    });

    const failedProps = propEntries.filter((e) => !e.match).map((e) => e.label);
    const propsSummary = propsPassed ? 'props OK' : `props FOUT: ${failedProps.join(', ')}`;
    console.log(
      `[${componentName}/${variant.name}] visueel ${(visual.matchPct * 100).toFixed(2)}% — ${propsSummary} — ${
        passed ? 'OK' : 'MISMATCH'
      }`,
    );
  }
} finally {
  await browser.close();
}

const failing = results.filter((r) => !r.passed);
const overallPassed = failing.length === 0;
const minMatch = Math.min(...results.map((r) => r.visual.matchPct));

// ---------- Rapport ----------

function fmtVal(v) {
  if (v == null) return '<code>—</code>';
  if (typeof v === 'number') {
    return `<code>${Number.isInteger(v) ? v : v.toFixed(2)}</code>`;
  }
  return `<code>${v}</code>`;
}

function rvoTable(headers, rows) {
  const ths = headers.map((h) => `          <th className="rvo-table-header">${h}</th>`).join('\n');
  const trs = rows
    .map(
      (cells) =>
        `          <tr className="rvo-table-row">\n${cells
          .map((c) => `            <td className="rvo-table-cell">${c}</td>`)
          .join('\n')}\n          </tr>`,
    )
    .join('\n');
  return `<div className="rvo-table--responsive">
  <table className="rvo-table">
    <thead className="rvo-table-head">
      <tr className="rvo-table-row">
${ths}
      </tr>
    </thead>
    <tbody className="rvo-table-body">
${trs}
    </tbody>
  </table>
</div>`;
}

// ---------- Afbeeldingen kopiëren naar docs img-map ----------

function toVarId(name) {
  return name.replace(/[^a-zA-Z0-9]/g, '_');
}

const imgDir = path.resolve(__dirname, '../../../documentation/pages/figma-sync/img', componentName);
await fs.mkdir(imgDir, { recursive: true });
for (const r of results) {
  for (const suffix of ['storybook', 'figma', 'diff']) {
    const src = path.join(outputDir, `${r.name}-${suffix}.png`);
    const dst = path.join(imgDir, `${r.name}-${suffix}.png`);
    await fs.copyFile(src, dst).catch(() => {});
  }
}

// ---------- Rapport ----------

function variantBlock(r) {
  const visualPct = (r.visual.matchPct * 100).toFixed(2);
  const visualStatus = r.visual.passed ? 'OK' : 'MISMATCH';
  const propsStatus = r.properties.passed ? 'OK' : 'MISMATCH';
  const figmaRef = r.figmaName
    ? `<code>${r.figmaName}</code> (<code>${r.figmaNodeId}</code>)`
    : `<code>${r.figmaNodeId}</code>`;
  const vid = toVarId(r.name);
  const thresholdLine =
    r.thresholdNote && r.threshold !== defaultThreshold
      ? `- Visueel: **${visualPct}%** (drempel ${(r.threshold * 100).toFixed(0)}%, verlaagd — ${
          r.thresholdNote
        }) — ${visualStatus}`
      : `- Visueel: **${visualPct}%** (drempel ${(r.threshold * 100).toFixed(0)}%) — ${visualStatus}`;
  const head = `### ${r.name} — ${r.passed ? 'OK' : 'MISMATCH'}

${thresholdLine}
- Properties: ${propsStatus}
- Figma: ${figmaRef}

<div style={{display:'flex', gap:'12px', marginBottom:'16px'}}>
  <figure style={{margin:0, flex:'1 1 0', minWidth:0}}>
    <figcaption style={{fontSize:'0.8em', color:'#666', marginBottom:'4px'}}>Storybook</figcaption>
    <img src={sb_${vid}} alt="Storybook render" style={{width:'100%', height:'auto', border:'1px solid #e0e0e0'}} />
  </figure>
  <figure style={{margin:0, flex:'1 1 0', minWidth:0}}>
    <figcaption style={{fontSize:'0.8em', color:'#666', marginBottom:'4px'}}>Figma</figcaption>
    <img src={figma_${vid}} alt="Figma export" style={{width:'100%', height:'auto', border:'1px solid #e0e0e0'}} />
  </figure>
  <figure style={{margin:0, flex:'1 1 0', minWidth:0}}>
    <figcaption style={{fontSize:'0.8em', color:'#666', marginBottom:'4px'}}>Diff (roze = afwijking)</figcaption>
    <img src={diff_${vid}} alt="Visueel verschil" style={{width:'100%', height:'auto', border:'1px solid #e0e0e0'}} />
  </figure>
</div>

`;

  const propTable = rvoTable(
    ['Property', 'Storybook', 'Figma', 'Status'],
    r.properties.entries.map((e) => [e.label, fmtVal(e.storybook), fmtVal(e.figma), e.match ? 'OK' : 'MISMATCH']),
  );
  return head + propTable;
}

const summaryTable = rvoTable(
  ['Variant', 'Visueel', 'Properties', 'Status'],
  results.map((r) => {
    const pct = (r.visual.matchPct * 100).toFixed(2) + '%';
    const failedProps = r.properties.entries.filter((e) => !e.match).length;
    return [r.name, pct, failedProps === 0 ? 'OK' : `${failedProps} afwijkend`, r.passed ? 'OK' : 'MISMATCH'];
  }),
);

const imgImports = results
  .flatMap((r) => {
    const vid = toVarId(r.name);
    return [
      `import sb_${vid} from './img/${componentName}/${r.name}-storybook.png';`,
      `import figma_${vid} from './img/${componentName}/${r.name}-figma.png';`,
      `import diff_${vid} from './img/${componentName}/${r.name}-diff.png';`,
    ];
  })
  .join('\n');

const docusaurusPageTitle = componentName.charAt(0).toUpperCase() + componentName.slice(1);
const docusaurusPage = `---
title: ${docusaurusPageTitle} — Figma sync rapport
displayed_sidebar: null
hide_table_of_contents: true
slug: /figma-sync/${componentName}
---

import { Link } from '@nl-rvo/component-library-react';

${imgImports}

<div className="rvo-max-width-layout rvo-max-width-layout--md rvo-max-width-layout-inline-padding--none rvo-layout-column rvo-layout-gap--md" style={{maxWidth: "912px", margin: "0 auto"}}>

<Link href="/rvo/docs/figma-sync" showIcon="before" icon="terug" noUnderline>Terug naar overzicht</Link>

# Figma sync rapport: ${componentName}

**Status**: ${overallPassed ? 'OK' : `${failing.length} van ${results.length} varianten onder drempel`}
**Laagste visuele match**: ${(minMatch * 100).toFixed(2)}%
**Storybook ID**: \`${component.storybookId}\`

${summaryTable}

---

${results.map(variantBlock).join('\n\n')}

</div>
`;

const docusaurusDir = path.resolve(__dirname, '../../../documentation/pages/figma-sync');
await fs.mkdir(docusaurusDir, { recursive: true });
await fs.writeFile(path.join(docusaurusDir, `${componentName}.docusaurus.mdx`), docusaurusPage);

const report = docusaurusPage;
await fs.writeFile(path.join(outputDir, 'report.md'), report);
await fs.writeFile(
  path.join(outputDir, 'result.json'),
  JSON.stringify(
    {
      component: componentName,
      defaultThreshold,
      passed: overallPassed,
      minMatch,
      variants: results,
    },
    null,
    2,
  ),
);

// ---------- Dashboard bijwerken ----------

const statusPath = path.join(__dirname, 'output', 'status.json');
let statusData = {};
try {
  statusData = JSON.parse(await fs.readFile(statusPath, 'utf8'));
} catch {
  // geen bestaand status-bestand
}

const failedPropKeys = new Set();
for (const r of results) {
  for (const e of r.properties.entries) {
    if (!e.match) failedPropKeys.add(e.label);
  }
}

statusData[componentName] = {
  lastChecked: new Date().toISOString(),
  passed: overallPassed,
  minMatch,
  totalVariants: results.length,
  failingVariants: failing.map((r) => r.name),
  failedProperties: [...failedPropKeys],
};

await fs.writeFile(statusPath, JSON.stringify(statusData, null, 2));

function fmtDateTime(iso) {
  const d = new Date(iso);
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const yyyy = d.getFullYear();
  const hh = String(d.getHours()).padStart(2, '0');
  const min = String(d.getMinutes()).padStart(2, '0');
  return `${dd}-${mm}-${yyyy} ${hh}:${min}`;
}

let analyticsData = {};
try {
  analyticsData = JSON.parse(await fs.readFile(path.join(__dirname, 'figma-analytics.json'), 'utf8'));
} catch {
  /* analytics optioneel */
}

// Alle componenten: unie van analytics-keys en status-keys, gesorteerd op instanties desc
// Niet-beschikbare componenten staan altijd onderaan; daarboven componenten zonder analytics (zoals time-input-field)
const allComponents = new Set([...Object.keys(analyticsData), ...Object.keys(statusData)]);
const sorted = [...allComponents].sort((a, b) => {
  const aUnavail = unavailableInFigma.has(a) ? 1 : 0;
  const bUnavail = unavailableInFigma.has(b) ? 1 : 0;
  if (aUnavail !== bUnavail) return aUnavail - bUnavail;
  const ia = analyticsData[a]?.instances ?? -1;
  const ib = analyticsData[b]?.instances ?? -1;
  return ib - ia;
});

function fmtNum(n) {
  if (n == null) return '—';
  return n.toLocaleString('nl-NL');
}

const unavailableInFigma = new Set(config.unavailableInFigma ?? []);

const dashboardRows = sorted
  .map((name) => {
    const s = statusData[name];
    const a = analyticsData[name];
    const notAvailable = !s && unavailableInFigma.has(name);
    const lastChecked = s ? fmtDateTime(s.lastChecked) : notAvailable ? 'Niet beschikbaar' : '—';
    const matchPct = s ? (s.minMatch * 100).toFixed(1) + '%' : '—';
    const status = s ? (s.passed ? 'OK' : 'MISMATCH') : '—';
    const failingStr = s ? (s.failingVariants.length > 0 ? s.failingVariants.join(', ') : '—') : '—';
    const instances = fmtNum(a?.instances);
    const inserts = fmtNum(a?.inserts);
    const detaches = fmtNum(a?.detaches);
    return `| ${name} | ${lastChecked} | ${matchPct} | ${status} | ${failingStr} | ${instances} | ${inserts} | ${detaches} |`;
  })
  .join('\n');

const dashboard = `# Figma sync — componentstatus

Bijgewerkt: ${fmtDateTime(new Date().toISOString())}

| Component | Laatste check | Visueel (min) | Status | Varianten FOUT | Instanties | Inserts (jaar) | Detaches (jaar) |
| --- | --- | --- | --- | --- | ---: | ---: | ---: |
${dashboardRows}

---

Figma-cijfers zijn een export van ${fmtDateTime(new Date().toISOString())}.

**Instanties** — huidig totaal gebruik van de component in alle Figma-bestanden van het team.

**Inserts (jaar)** — aantal keer ingevoegd in de afgelopen 12 maanden; maatstaf voor adoptie.

**Detaches (jaar)** — aantal keer losgekoppeld van de library; hoog = component voldoet niet aan de behoefte.
`;

const dashboardPath = path.join(__dirname, 'output', 'dashboard.md');
await fs.writeFile(dashboardPath, dashboard);

// ---------- figma-sync-data.json bijwerken ----------
const syncDataPath = path.resolve(__dirname, '../../../packages/docusaurus/src/pages/figma-sync-data.json');
try {
  let syncData = { rows: [], exportDate: '—' };
  try {
    syncData = JSON.parse(await fs.readFile(syncDataPath, 'utf8'));
  } catch {
    /* nieuw bestand */
  }

  const reportHref = `/rvo/docs/figma-sync/${componentName}`;
  const rowIdx = syncData.rows.findIndex((r) => r.name === componentName);
  const existing =
    rowIdx >= 0
      ? syncData.rows[rowIdx]
      : { name: componentName, figmaHref: null, figmaMissing: false, instances: '—', inserts: '—', detaches: '—' };
  const updatedRow = {
    ...existing,
    reportHref,
    lastChecked: fmtDateTime(new Date().toISOString()),
    matchPct: `${(minMatch * 100).toFixed(1)}%`,
    passed: overallPassed,
  };
  if (rowIdx >= 0) {
    syncData.rows[rowIdx] = updatedRow;
  } else {
    syncData.rows.push(updatedRow);
  }
  // Zet lastChecked voor niet-beschikbare componenten
  for (const unavailName of config.unavailableInFigma ?? []) {
    const idx = syncData.rows.findIndex((r) => r.name === unavailName);
    if (idx >= 0 && syncData.rows[idx].lastChecked == null) {
      syncData.rows[idx] = { ...syncData.rows[idx], lastChecked: 'Niet beschikbaar' };
    }
  }

  await fs.writeFile(syncDataPath, JSON.stringify(syncData));
  console.log(`  figma-sync-data.json bijgewerkt`);
} catch (e) {
  console.warn(`  Kon figma-sync-data.json niet bijwerken: ${e.message}`);
}

console.log(
  `[${componentName}] ${overallPassed ? 'OK' : 'MISMATCH'} — laagste visueel ${(minMatch * 100).toFixed(2)}% (${
    failing.length
  } variant(en) onder drempel)`,
);
console.log(`  Dashboard: ${dashboardPath}`);
