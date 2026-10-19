# Instructies voor het maken van demopagina's met het ROOS design system

## Regels

- Gebruik **uitsluitend** ROOS componenten: óf via `@nl-rvo/component-library-react` (React), óf via de HTML/CSS componenten — beide zijn toegestaan
- Gebruik **uitsluitend** ROOS helper classes (utility classes en layout classes zoals `rvo-max-width-layout--sm/md/lg`)
- Geen inline styles — alles via ROOS klassen
- Geen harde kleurwaarden — gebruik altijd design tokens (bv. `var(--rvo-color-...)`)
- Gebruik geen tokens die niet in ROOS voorkomen

## Paginastructuur

Gebruik altijd `documentation/demopages/templates/Basispagina.tsx` als startpunt. Elke pagina bevat:

1. **Header** — `<Header link="#" />` met het RVO-logo
2. **Navigatie** — `<MenuBar>` met aangepaste items (zie MenuBar hieronder), of weglaten als de pagina geen nav heeft
3. **Main content** — binnen `<main className="rvo-max-width-layout rvo-max-width-layout--sm rvo-max-width-layout-inline-padding--md">` (kies `--sm`, `--md` of `--lg` op basis van de gewenste breedte)
4. **Footer** — `<Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />`

Wikkel header + content + footer in `<LayoutFlow gap="3xl">` zodat ze correct worden gestapeld.

## Cards met link-titels

Gebruik altijd `linkProps={{ noUnderline: true }}` op `<Card>` wanneer de titel een link is. Card-titels zijn visueel al herkenbaar als link door context en kleur — underline is hier overbodig en visueel storend.

## Toegankelijke kleurencombinaties (WCAG 2.1 AA)

Gebruik **uitsluitend** combinaties uit de officiële ROOS lijst in `documentation/pages/design-tokens/design-tokens.color.mdx`. De meest gebruikte toegankelijke combinaties:

**Tekst op lichte achtergronden:**

- Donkerblauw / Lintblauw / Zwart / Grijs-700..900 op: Wit, Grijs-050..300, Lichtblauw-150..450, Donkerblauw-150..300, Hemelblauw-150..300, alle pastelkleuren (-150)

**Tekst op donkere achtergronden:**

- Wit / Grijs-050..100 / Lichtblauw-150 / Donkerblauw-150 / Hemelblauw-150 op: Donkerblauw, Lintblauw, Grijs-600..900, Zwart

**Veelgemaakte fout — niet toegankelijk:**

- Hemelblauw (#007BC7) op Lichtblauw-150 (#EEF7FC): contrast ~4.2:1 ❌ — gebruik in plaats daarvan Donkerblauw op Lichtblauw-150 ✓
- Hemelblauw op Wit is WEL toegankelijk (4.55:1 ✓)
- Gebruik op gekleurde achtergronden altijd `color="donkerblauw"` voor links i.p.v. de standaard `hemelblauw`

## Beschikbare componenten (`@nl-rvo/component-library-react`)

```text
Accordion, AccordionItem, ActionGroup, Alert, Breadcrumbs, BreadcrumbsItem,
Button, Card, CardExperimental, CheckBoxFilter, CounterBadge, DataList, DataListItem,
Dialog, ExpandableContent, ExpandableTable, Favicon, Footer,
Autocomplete, Checkbox, CheckboxGroup, DateInput, Feedback, Field,
CheckboxField, DateInputField, FileInputField, Label, RadioButtonField,
SelectField, TextareaField, TextInputField, TimeInputField, Fieldset,
FileInput, FormLayout, RadioButton, RadioButtonGroup, Select, Textarea,
TextInput, TimeInput, Grid, Header, Heading, Hero, Hr, Icon, Image,
ItemList, LayoutFlow, Link, Loader, Logo, MaxWidthLayout,
MenuBar, MenuBarItem, SubMenu, MobileMenuBar, List,
PageNumberNavigation, Pagination, Paragraph, ProgressTracker, Quote,
ScrollableContent, SidebarLayout, Skeleton, SkipLink,
StatusIcon, StatusIndicator, Table, Tabs, TabItem, Tag, Toggle,
UtilityBackground, UtilityBorder, UtilityText, UtilityPadding, UtilityMargin, UtilityTextTypes,
ThemeProvider
```

## Heading

```tsx
<Heading type="h1|h2|h3|h4|h5|h6" noMargins? fontWeightNormal? showIcon="before|after" icon={IconType}>
```

Gebruik `noMargins` wanneer je zelf de ruimte bepaalt via `LayoutFlow`.

## LayoutFlow

```tsx
<LayoutFlow gap="0|3xs|2xs|xs|sm|md|lg|xl|2xl|3xl|4xl|5xl" direction="column|column-inline|row|row-inline">
```

Spacing-schaal in px: `3xs`=2, `2xs`=4, `xs`=8, `sm`=12, `md`=16, `lg`=18, `xl`=24, `2xl`=32, `3xl`=48, `4xl`=64, `5xl`=128.

## MenuBar

```tsx
<MenuBar
  items={[{ label, link, icon, align: "left" | "right", useDivider, submenu }]}
  size="sm|md|lg"
  maxWidth="none|sm|md|lg"
  useIcons={true | false}
  iconPlacement="before|after"
  horizontalRule={true | false}
  direction="horizontal|vertical"
  linkColor="donkerblauw|hemelblauw|lintblauw|grijs-700|zwart"
  useBackgroundColor={true | false}
/>
```

## Veelgebruikte iconen (functioneel)

`home`, `user`, `plus`, `kruis`, `vinkje`, `zoek`, `info`, `let-op`, `pijl-naar-rechts`, `pijl-omlaag`, `pijl-omhoog`, `terug`, `inloggen`, `instellingen`, `mail`, `telefoon`, `kalender`, `klok`, `downloaden`, `upload`, `bewerken`, `verwijderen`, `externe-link`, `menu`, `meer`, `refresh`, `publicatie`, `locatiemarker`, `favoriet`, `printer`, `save`, `delen`, `delta-naar-links`, `delta-naar-rechts`, `delta-omhoog`, `delta-omlaag`

Volledige lijst staat in `packages/component-library-react/src/components/icon/types.ts`.

## Design tokens — overzicht

**Max-width:** `--rvo-layout-max-width-sm`=608px, `--rvo-layout-max-width-md`=912px, `--rvo-layout-max-width-lg`=1280px

**Spacing:** `--rvo-space-3xs`=2px, `--rvo-space-2xs`=4px, `--rvo-space-xs`=8px, `--rvo-space-sm`=12px, `--rvo-space-md`=16px, `--rvo-space-lg`=18px, `--rvo-space-xl`=24px, `--rvo-space-2xl`=32px, `--rvo-space-3xl`=48px, `--rvo-space-4xl`=64px, `--rvo-space-5xl`=128px

**Kleuren (basisnamen):** `wit`, `zwart`, `grijs-050` t/m `grijs-900`, `donkerblauw`, `hemelblauw`, `lichtblauw`, `lintblauw`, `groen`, `rood`, `oranje`, `donkergeel`, `violet`. Per kleur zijn tints beschikbaar: `--rvo-color-[naam]-150/300/450/600/750` (licht→donker). Volledig overzicht: `proprietary/design-tokens/dist/index.css`.

**Font-size:** `--rvo-font-size-2xs`=0.625rem t/m `--rvo-font-size-4xl`=3rem (`xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`).

## Helper classes (max-width layout)

- `rvo-max-width-layout` + `rvo-max-width-layout--sm|md|lg` (centreert, max-breedte)
- `rvo-max-width-layout--uncentered` (geen auto-margin)
- `rvo-max-width-layout-inline-padding--sm|md|lg` (horizontale padding)

## Utility classes

Beschikbaar als React-component én als CSS-klasse. Zie `utilities/utility-*/src/index.scss` voor volledige lijsten: margin, padding, text (kleur/grootte/gewicht), achtergrond, border.

## Bestaande demopagina's als referentie

- `documentation/demopages/templates/` — Basispagina, Content, Dashboard, Formulier (basispatronen)
- `documentation/demopages/voorbeelden/` — uitgewerkte voorbeelden per applicatie (berichtenbox, www, sib)
- `documentation/demopages/experimenteel/` — experimentele patronen (submenu, grid, zoek-in-nav)
- `documentation/demopages/common/` — gedeelde defaults (footer items, menubar items)

## Waar nieuwe demopagina's komen

Nieuwe demopagina's horen in `documentation/demopages/`. Maak altijd ook een `.stories.tsx` aan zodat de pagina zichtbaar is in Storybook.
