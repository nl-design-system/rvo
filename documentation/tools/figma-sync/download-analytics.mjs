#!/usr/bin/env node
// Navigeert naar Figma Analytics > Components en downloadt de CSV.
// Gebruikt het persistente Chromium-profiel zodat je al ingelogd bent.

import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PROFILE_DIR = `${process.env.HOME}/.config/google-chrome-for-testing`;
const FIGMA_FILE_ID = 'Sj6myBL1Fvot5M1qGxzvEo';
const FIGMA_TEAM_ID = '1215337725247982465';
const DOWNLOAD_DIR = `${process.env.HOME}/Downloads`;

const browser = await chromium.launchPersistentContext(PROFILE_DIR, {
  headless: false,
  args: ['--no-first-run', '--no-default-browser-check', '--disable-infobars'],
  acceptDownloads: true,
  downloadsPath: DOWNLOAD_DIR,
  viewport: { width: 1400, height: 900 },
  slowMo: 500,
});

const page = browser.pages()[0] ?? await browser.newPage();

// Library analytics zit in de file browser, niet op een aparte URL
const ANALYTICS_URL = `https://www.figma.com/files/${FIGMA_TEAM_ID}/recents-and-sharing`;

console.log('Navigeren naar Analytics...');
await page.goto(ANALYTICS_URL, { waitUntil: 'domcontentloaded', timeout: 30000 });

// Detecteer loginpagina via URL (Figma redirect naar /login of /signup)
const currentUrl = page.url();
const needsLogin = currentUrl.includes('login') || currentUrl.includes('signin') || currentUrl.includes('signup');
if (needsLogin) {
  console.log(`Loginpagina gedetecteerd (${currentUrl})`);
  console.log('Log in via het browservenster — script wacht (max 2 min)...');
  await page.waitForURL(
    (url) => !url.toString().includes('login') && !url.toString().includes('signin') && !url.toString().includes('signup'),
    { timeout: 120000 },
  );
  await page.waitForTimeout(2000);
  console.log('Ingelogd, terug naar Analytics...');
  await page.goto(ANALYTICS_URL, { waitUntil: 'networkidle', timeout: 30000 });
} else {
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
}

console.log('Huidige URL:', page.url());

await page.screenshot({ path: path.join(__dirname, 'output', 'analytics-page.png') });
console.log('Screenshot opgeslagen: output/analytics-page.png');

await page.waitForTimeout(3000);

// Zoek het ROOS-bestand in de recents lijst en rechtsklik erop
// Pauzeer zodat je het venster kunt zien — druk op Resume in de Playwright Inspector om door te gaan
await page.pause();

console.log('Zoeken naar ROOS-bestand in recents...');
const roosFile = page.locator('[class*="thumbnail"], [data-testid*="file-thumbnail"]')
  .filter({ hasText: 'ROOS' })
  .or(page.locator('a, div, li').filter({ hasText: /ROOS.*RVO Design System/i }))
  .first();

const fileVisible = await roosFile.isVisible({ timeout: 5000 }).catch(() => false);
if (!fileVisible) {
  await page.screenshot({ path: path.join(__dirname, 'output', 'analytics-page.png'), fullPage: true });
  console.log('ROOS-bestand niet gevonden — screenshot gemaakt.');
  await browser.close();
  process.exit(1);
}

console.log('ROOS-bestand gevonden, rechtsklikken...');
await roosFile.click({ button: 'right' });
await page.waitForTimeout(1000);
await page.screenshot({ path: path.join(__dirname, 'output', 'analytics-contextmenu.png') });
console.log('Screenshot contextmenu: output/analytics-contextmenu.png');

// Klik op "Library analytics" in het contextmenu
const analyticsMenuItem = page.getByRole('menuitem', { name: /library analytics/i }).or(
  page.locator('[role="menuitem"]').filter({ hasText: /analytics/i }),
);

const menuVisible = await analyticsMenuItem.first().isVisible({ timeout: 5000 }).catch(() => false);
if (!menuVisible) {
  const menuItems = await page.locator('[role="menuitem"]').allTextContents();
  console.log('Menu-items:', menuItems);
  await browser.close();
  process.exit(1);
}

console.log('Library analytics menu-item gevonden, klikken...');
await analyticsMenuItem.first().click();
await page.waitForTimeout(3000);

await page.screenshot({ path: path.join(__dirname, 'output', 'analytics-modal.png'), fullPage: true });
console.log('Screenshot modal: output/analytics-modal.png');

// Zoek Download CSV knop
const csvBtn = page.getByRole('button', { name: /download csv|export/i }).or(
  page.locator('button:has-text("Download"), a:has-text("CSV")'),
);

const csvVisible = await csvBtn.first().isVisible({ timeout: 8000 }).catch(() => false);
if (!csvVisible) {
  const btns = await page.locator('button').allTextContents();
  console.log('Knoppen in modal:', btns.filter(t => t.trim()));
  console.log('Download CSV-knop niet gevonden — zie analytics-modal.png.');
  await browser.close();
  process.exit(1);
}

console.log('Download CSV gevonden, klikken...');
const [download] = await Promise.all([
  page.waitForEvent('download', { timeout: 15000 }),
  csvBtn.first().click(),
]);

const savePath = path.join(DOWNLOAD_DIR, download.suggestedFilename());
await download.saveAs(savePath);
console.log(`CSV opgeslagen: ${savePath}`);

await browser.close();
