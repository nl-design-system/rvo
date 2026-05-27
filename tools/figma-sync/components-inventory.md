# ROOS componenten — variant-inventaris

Inventaris van alle 49 componenten in `components/` met het theoretische
aantal variant-combinaties, als basis voor de uitrol van figma-sync naar
componenten verder dan Button.

**Focus-states zijn weggelaten** uit de telling: Figma's COMPONENT_SET kent
geen `focus`-variant (in tegenstelling tot `hover`), dus die dimensie kan
niet 1-op-1 gesynct worden. Een `focus(2)`-boolean uit de argTypes telt dus
niet mee als variant-as.

## Volledige lijst — gesorteerd op aantal combinaties

| # | Component | Dimensies | Combinaties |
| --- | --- | --- | --- |
| 1 | layout-flow | gap(12) × alignContent(4) × justifyContent(5) × alignItems(4) × justifyItems(4) × row(2) × wrap(2) | 19.200 |
| 2 | form-textinput | type(10) × size(5) × autoFocus(2) × disabled(2) × invalid(2) × readOnly(2) × required(2) | 3.200 |
| 3 | grid | columns(12) × gap(11) × marginBlockEnd(12) | 1.584 |
| 4 | button | kind(7) × size(3) × showIcon(3) × disabled(2) × fullWidth(2) | 252 |
| 5 | form-checkbox | checked(2) × hover(2) × disabled(2) × active(2) × indeterminate(2) × invalid(2) × required(2) | 128 |
| 6 | link | weight(2) × showIcon(3) × iconSize(2) × iconColor(2) × hover(2) × active(2) | 96 |
| 7 | dialog | backdrop(2) × size(4) × verticalScroll(3) × wide(2) × dialogOpen(2) | 96 |
| 8 | form-select | size(5) × autoFocus(2) × disabled(2) × invalid(2) × required(2) | 80 |
| 9 | form-dateinput | type(4) × autoFocus(2) × disabled(2) × invalid(2) × required(2) | 64 |
| 10 | form-radio-button | checked(2) × hover(2) × disabled(2) × active(2) × invalid(2) × required(2) | 64 |
| 11 | form-timeinput | type(4) × autoFocus(2) × disabled(2) × invalid(2) × required(2) | 64 |
| 12 | toggle | kind(4) × size(3) × disabled(2) × active(2) | 48 |
| 13 | alert | kind(4) × padding(6) × closable(2) | 48 |
| 14 | card | variant(3) × outlined(3) × padding(4) | 36 |
| 15 | form-textarea | autoFocus(2) × disabled(2) × invalid(2) × readOnly(2) × required(2) | 32 |
| 16 | max-width-layout | maxWidth(4) × variant(3) × fullHeight(2) | 24 |
| 17 | form-fileinput | autoFocus(2) × disabled(2) × invalid(2) × required(2) | 16 |
| 18 | form-field | kind(2) × disabled(3) × invalid(2) | 12 |
| 19 | ordered-unordered-list | marker(3) × variant(2) × compact(2) | 12 |
| 20 | sidebar-layout | variant(3) × sticky(2) × fullHeight(2) | 12 |
| 21 | icon | kind(8) | 8 |
| 22 | status-icon | kind(8) | 8 |
| 23 | status-indicator | kind(8) | 8 |
| 24 | breadcrumbs | variant(3) | 3 |
| 25 | form-checkbox-group | disabled(2) | 2 |
| 26 | form-feedback | kind(2) | 2 |
| 27 | form-fieldset | disabled(2) | 2 |
| 28 | form-radio-button-group | disabled(2) | 2 |
| 29 | paragraph | variant(2) | 2 |
| 30 | accordion | — | 1 |
| 31 | action-group | — | 1 |
| 32 | data-list | — | 1 |
| 33 | form-field-checkbox | — | 1 |
| 34 | form-field-dateinput | — | 1 |
| 35 | form-field-fileinput | — | 1 |
| 36 | form-field-radio-button | — | 1 |
| 37 | form-field-select | — | 1 |
| 38 | form-field-textarea | — | 1 |
| 39 | form-field-textinput | — | 1 |
| 40 | form-field-timeinput | — | 1 |
| 41 | form-layout | — | 1 |
| 42 | header | — | 1 |
| 43 | item-list | — | 1 |
| 44 | logo | — | 1 |
| 45 | progress-tracker | — | 1 |
| 46 | scrollable-content | — | 1 |
| 47 | skip-link | — | 1 |
| 48 | table | — | 1 |
| 49 | tabs | — | 1 |

## Samenvatting

- **49 componenten** in totaal
- **~24.000 theoretische combinaties** (na weglaten focus-states)
- **27 componenten met ≤4 varianten** — snel volledig te dekken
- **5 componenten met >100 varianten** — combinatorische uitbarsting, niet realistisch om volledig 1-op-1 te syncen

### Belangrijkste observaties

- **Button is niet het meest complexe** — staat 4e, na layout-flow, form-textinput en grid.
- **Layout-componenten** (layout-flow, grid) zijn explosief door veel
  spacing/alignment-waardes, maar de meeste combinaties zijn visueel triviaal
  (alleen padding/gap-grootte verschilt).
- **Form-inputs** hebben veel state-booleans die in werkelijkheid niet
  onafhankelijk zijn — `disabled + invalid` of `readOnly + required` zijn
  bv. zinloze combinaties. Het echte aantal "zinvolle" varianten ligt veel
  lager dan het theoretische maximum.
- **20 componenten hebben 1 variant** — meestal compositie-componenten zonder
  eigen styling-axes (data-list, form-layout, header etc.). Snel te syncen.

## Voorgestelde uitrol-volgorde voor figma-sync

| Tier | Componenten | Strategie |
| --- | --- | --- |
| 1 (klein, 27 stuks) | Alles met ≤4 varianten | Volledig 1-op-1; config-effort per component <5 min |
| 2 (middel, 12 stuks) | 5-50 varianten (alert, card, toggle, icon, etc.) | Subset gedocumenteerd in Figma-COMPONENT_SET 1-op-1 |
| 3 (groot, 5 stuks) | layout-flow, form-textinput, grid, form-checkbox, button | Alleen kanonieke combinaties (niet alle); rest via Chromatic |

### Hint per tier

- **Tier 1**: pure copy-paste van bestaande Button-config-pattern met andere
  axis-waarden — kan in een paar uur 20+ componenten dekken.
- **Tier 2**: vereist dat Figma-COMPONENT_SETs voor deze componenten bestaan
  met matching axis-naamgeving (`Kind=`, `Size=`, etc.). Eerst controleren of
  dat geldt voordat er code geschreven wordt.
- **Tier 3**: figma-sync heeft hier weinig toegevoegde waarde t.o.v. visuele
  regression-testing in Chromatic. Bewust beperken tot bv. 10-20 kerncombinaties
  per component i.p.v. volledige cartesisch product.
