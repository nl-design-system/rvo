# figma-sync

Vergelijkt een Storybook-render met een Figma-export en signaleert visuele drift.
POC-scope: **Button**.

## Wat het doet

Per component vergelijkt het script **elke variant uit `components.json`** op
twee lagen:

1. **Visueel** — Storybook-screenshot (Playwright) vs Figma-export (REST API),
   vergeleken met `pixelmatch` (kleur-tolerantie 0.2, AA-pixels uitgesloten).
   Output: `<variant>-storybook.png`, `<variant>-figma.png`, `<variant>-diff.png`.
2. **Properties** — `getComputedStyle` van de button in Storybook vs de Figma
   node-properties (REST API). Vergeleken worden:
   - `width`, `height` (1px tolerantie)
   - `border-radius`, `border-width` (exact)
   - `border-color`, `background-color`, `text-color` (genormaliseerd naar `rgb()`)
   - `font-size`, `font-weight` (exact)
   - `padding-top/right/bottom/left` (exact)

Een variant **passeert** als de visuele match boven de drempel blijft **én**
alle properties matchen. Property-mismatch geeft een **harde** alert (geen
tolerantie-drempels nodig); visueel is een **zachte** alert die hoort bij
subpixel anti-aliasing ruis tussen Figma's rendering-engine en Chromium.

Bij een mismatch plaatst de GitHub Actions workflow
(`.github/workflows/figma-sync.yml`) een PR-comment met het hele rapport
(visueel % + property-tabel per variant) en stuurt een mail naar
`designsystem@rvo.nl`. De mail bevat een link naar het artifact zodat een mens
kan beoordelen.

## Lokaal draaien

Eenmalig opzetten:

```bash
cd tools/figma-sync
npm install
npx playwright install chromium
echo 'FIGMA_TOKEN=figd_...' > .env.local
```

Vereist: een Figma-token met read-access op het ROOS-bestand
(`Sj6myBL1Fvot5M1qGxzvEo`). Genereer via Figma > Settings > Personal access
tokens.

### Snelste manier — `sync.sh`

```bash
./sync.sh                  # button (default), gebruikt bestaande Storybook-dist
./sync.sh alert            # andere component
./sync.sh button --build   # bouw Storybook eerst opnieuw (na code-wijziging)
```

Het script stopt eventuele oude Storybook-server op poort 6006, bouwt indien
nodig de dist, start de server, draait `compare.mjs` voor de opgegeven
component, en stopt de server weer na afloop. Output staat in
`output/<component>/`.

### Handmatig (drie stappen)

```bash
# In ROOS-root
pnpm --filter @nl-rvo/storybook build
npx http-server packages/storybook/dist -p 6006 -s &

# In tools/figma-sync
set -a && source .env.local && set +a
node compare.mjs button

# Resultaat
cat output/button/report.md
xdg-open output/button/primary-md-diff.png
```

## Een component toevoegen

De tool ondersteunt twee config-stijlen — kies wat past:

### Matrix-stijl (aanbevolen voor meerdere axes)

Definieer welke dimensies de component heeft. Het script bouwt automatisch
het cartesisch product en zoekt de matching Figma-COMPONENT-instances op via
de naam in het COMPONENT_SET.

```json
"button": {
  "storybookId": "componenten-button--default",
  "paths": ["components/button/**", "packages/component-library-react/src/components/button/**"],
  "figmaComponentSetId": "4127:18556",
  "figmaNamePattern": "Size={size}, Kind={kindFigma}, Hover=False",
  "argsPattern": "kind:{kind};size:{size};showIcon:after;icon:home",
  "axes": {
    "kind": ["primary", "secondary", "tertiary", "quaternary"],
    "size": ["md", "sm", "xs"]
  },
  "valueMaps": {
    "kindFigma": {
      "axis": "kind",
      "values": {
        "primary": "Primary",
        "secondary": "Secondary",
        "tertiary": "Tertiary",
        "quaternary": "Quaternary"
      }
    }
  },
  "thresholds": {
    "tertiary-*": 0.70
  }
}
```

- **`axes`** — de dimensies (alle combinaties worden getest). Variant-naam =
  axis-waardes dash-joined, bv. `primary-md`, `tertiary-xs`.
- **`figmaNamePattern` / `argsPattern`** — placeholder-templates. Per
  combinatie worden `{kind}`, `{size}` etc. ingevuld.
- **`valueMaps`** — als de naam in Figma verschilt van de CSS-waarde,
  definieer hier een mapping. `axis` zegt op welke axis de map slaat,
  `values` is de CSS→Figma vertaling. Te gebruiken in templates als
  `{kindFigma}`.
- **`thresholds`** — per-variant drempel-override met glob-patroon. Match op
  variant-naam. Default voor alle varianten = de top-level `threshold`.

### Expliciete variants-stijl (voor enkelvoudige axes of speciale gevallen)

```json
"alert": {
  "storybookId": "componenten-alert--default",
  "paths": ["..."],
  "variants": {
    "info":    { "args": "kind:info",    "figmaNodeId": "12:345" },
    "warning": { "args": "kind:warning", "figmaNodeId": "12:346", "threshold": 0.85 }
  }
}
```

### Figma node-ids vinden

`figmaComponentSetId` is de node-id van de Figma COMPONENT_SET (het container-
frame dat alle component-varianten bevat). Te vinden via:

```bash
curl -H "X-Figma-Token: $FIGMA_TOKEN" \
  "https://api.figma.com/v1/files/Sj6myBL1Fvot5M1qGxzvEo/nodes?ids=46:529"
```

Filter in de response op het kind `COMPONENT_SET`. De script-output bij een
run laat zien welke naam hij verwacht (bv. `Size=md, Kind=Primary, Hover=False`)
en welke node-id daar bij hoort.

### Workflow-trigger

In `.github/workflows/figma-sync.yml`: voeg de paden toe onder
`on.pull_request.paths` en pas de "Run comparison"-stap aan zodat hij ook
`node compare.mjs alert` draait.

Storybook-id is `<slug-van-title>--<slug-van-name>`.

## CI-secrets en -variabelen

Repo-secrets:

- `FIGMA_TOKEN` — Figma personal access token (verplicht)
- `RESEND_API_KEY` — Resend API key voor mail (optioneel; zonder key wordt
  alleen de PR-comment geplaatst)

Repo-variabelen (optioneel, overschrijven defaults):

- `FIGMA_SYNC_MAIL_FROM` — afzenderadres (default `onboarding@resend.dev`).
  Voor productie: verifieer een eigen domein bij Resend, bv. `noreply@rvo.nl`.
- `FIGMA_SYNC_MAIL_TO` — ontvanger (default `designsystem@rvo.nl`)

## Drempel aanpassen

In `components.json`:

```json
{
  "threshold": 0.90,
  ...
}
```

`threshold` op top-niveau is de **default voor alle varianten**. Een variant
kan een eigen `threshold` meegeven (zie hierboven bij tertiary).

### Waarom geen 95%?

Eerste meting op clean Button-code: subpixel anti-aliasing tussen Figma's
rendering-engine en headless Chromium produceert ~5-7% baseline-ruis op
solid-background buttons (primary/secondary/quaternary scoren ~95-99%) en
~25% op text-only buttons (tertiary, zonder achtergrond). Een **echte**
mismatch (bv. primary blauw vs. quaternary groen) zakt naar onder de 10%, dus
ruim onder elke realistische drempel.

De ingestelde defaults (90% voor solid, 70% voor text-only) zijn een
compromis: clean code passeert, kleine drift wordt opgemerkt, en echte
ontwerpwijzigingen zakken er hard doorheen.

## Bestanden

- `compare.mjs` — vergelijkingsscript
- `components.json` — mapping componentnaam → Figma-node + Storybook-id
- `package.json` — deps (Playwright, pixelmatch, sharp, pngjs)
- `output/` — niet ge-committeerd; bevat de PNG's en rapporten per run
