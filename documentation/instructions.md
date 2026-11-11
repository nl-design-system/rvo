# RVO Design System — Instructions

All instructions in this file must be written in English.

Monorepo (`@nl-rvo/design-system`) built on [NL Design System](https://nldesignsystem.nl/). Provides design tokens, CSS components, and React wrappers for Dutch government applications.

## Tech stack

| Tool            | Notes                                     |
| --------------- | ----------------------------------------- |
| Node.js         | >=24 <=25                                 |
| Package manager | pnpm ≥11.4 workspaces                     |
| Language        | TypeScript strict, TSX, SCSS, MDX         |
| UI framework    | React 18                                  |
| Storybook       | Component dev & docs                      |
| Docusaurus      | Docs website                              |
| Linting         | ESLint, Stylelint, markdownlint, Prettier |

## Monorepo structure

```text
components/       # CSS + React components (one folder per component)
utilities/        # Utility CSS classes
packages/         # Build tooling, Storybook, Docusaurus config
documentation/    # Docusaurus docs site source
proprietary/      # Closed design tokens and assets
```

## Component anatomy

```text
components/<name>/
  src/
    template.tsx      # React component + exported argTypes
    index.scss        # BEM + design tokens
    defaultArgs.ts    # Default Storybook args
    types.ts          # (optional)
    presets/          # (optional)
  design-tokens.json
  package.json        # @nl-rvo/css-<name>
  *.stories.tsx
  *.docusaurus.mdx
  CHANGELOG.md
```

## Coding conventions

### TypeScript / React

- Strict TypeScript; no implicit `any`, no implicit returns.
- Named exports only — no default exports.
- Props interfaces extend the matching HTML element: `interface IFooProps extends HTMLAttributes<HTMLDivElement>`
- License header in every source file:

  ```ts
  /**
   * @license CC0-1.0
   * Copyright (c) 2022 Community for NL Design System
   */
  ```

- Import order (ESLint `import/order`, ascending, no blank lines between groups):
  1. `builtin` / `external` (`@nl-rvo/…`, `react`)
  2. `internal` / `unknown`
  3. `parent` / `sibling` / `index` — sibling (`./`) before parent (`../../`)

### SCSS

- Always use design tokens (CSS custom properties); never hardcode colours, spacing, or typography.
- BEM naming.
- Import `index.scss` inside `template.tsx`.
- Base on `@utrecht/*` packages where available.

### Docusaurus pattern pages (`.docusaurus.mdx`)

- Both `<ComponentExample>` previews and fenced code examples must use **plain HTML with BEM/CSS classes** — never React components or TSX.
- Language tag: ` ```html `.
- Use correct BEM class names as rendered (e.g. `rvo-link`, `rvo-heading`, `rvo-button--primary`).
- Do not import React components in pattern pages — use the rendered HTML elements and classes directly.
- Links in running text must use an `<a>` tag with `className="rvo-link"` — never a bare Markdown link. Example: `<a href="/rvo/docs/components/foo" className="rvo-link">Foo</a>`.

### Storybook stories

- Story files live next to the component, not inside `src/`.
- Use `argTypes` from `src/template.tsx` and `defaultArgs` from `src/defaultArgs.ts`.
- Split into separate files for many variants (e.g. `button.kinds.stories.tsx`).

### Design tokens

- Defined in `design-tokens.json`.
- Pattern: `--rvo-<component>-<property>`.
- When adding or changing tokens, always update **all three token files** in sync:
  1. `components/<name>/design-tokens.json` — CSS custom property declarations
  2. `proprietary/design-tokens/src/components/rvo/<name>.tokens.json` — token values
  3. `proprietary/design-tokens/figma/figma.tokens.json` — Figma sync values
- **Always look for an existing brand or common token before using a hardcoded value.** Check `proprietary/design-tokens/src/brand/` and `proprietary/design-tokens/src/common/` first. Use a token reference (`{rvo.*}`) whenever one exists. If no matching token exists, notify the team before writing a hardcoded value — never silently use a hardcoded value.

### Package naming

- CSS: `@nl-rvo/css-<component>`
- React: `@nl-rvo/react-<component>`
- Design tokens: `@nl-rvo/design-tokens`
- Build utils: `@nl-rvo/build-utils-css`

## Commands

```bash
pnpm install
pnpm build
pnpm lint
pnpm format
pnpm test
```

Rebuild a single package after changes:

```bash
pnpm --filter @nl-rvo/css-<component> build
pnpm --filter @nl-rvo/react-<component> build
pnpm --filter @nl-rvo/design-tokens build
```

## Prototyping

Prototypes live in `documentation/demopages/`:

| Type         | Folder                               |
| ------------ | ------------------------------------ |
| Experimental | `demopages/experimenteel/<project>/` |
| Example      | `demopages/voorbeelden/<project>/`   |
| Template     | `demopages/templates/`               |

Each folder contains `<PageName>.tsx` + `<PageName>.stories.tsx`.

Confirm the type (experimental, example, or template) before starting.

Existing demopages as reference:

- `documentation/demopages/templates/` — Basispagina, Content, Dashboard, Formulier (base patterns)
- `documentation/demopages/voorbeelden/` — worked-out examples per application (berichtenbox, www, sib)
- `documentation/demopages/experimenteel/` — experimental patterns (submenu, grid, zoek-in-nav)
- `documentation/demopages/common/` — shared defaults (footer items, menubar items)

### Rules

- Only use React components from `@nl-rvo/component-library-react`, or HTML/CSS components — both are allowed.
- Use only ROOS helper classes (utility classes and layout classes like `rvo-max-width-layout--sm/md/lg`).
- No inline `style={{}}` and no custom SCSS — use design tokens and utility classes only.
  - **Exception (experimental only):** inline styles / custom SCSS allowed when no token or utility class exists.
- No hardcoded colour values — always use design tokens (e.g. `var(--rvo-color-...)`). Do not use tokens that don't exist in ROOS.
- No interactive code (state, event handlers) unless explicitly requested.
- Always wrap form fields in `Fieldset` (with `legend`). See `templates/Formulier.tsx`.
- Always use `Basispagina` (`templates/Basispagina.tsx`) as outer layout.
- `MenuBar` between header and main only when requested.
- **Code is the source of truth.** When code and Figma diverge, Figma is updated to match code. This applies to "dead" property values too (e.g. `border-color` without `border-width`): keep them in code and reflect them in Figma.

### Page structure

Every page contains:

1. **Header** — `<Header link="#" />` with the RVO logo
2. **Navigation** — `<MenuBar>` with custom items (see MenuBar below), or omit when the page has no nav
3. **Main content** — inside `<main className="rvo-max-width-layout rvo-max-width-layout--sm rvo-max-width-layout-inline-padding--md">` (choose `--sm`, `--md`, or `--lg` based on the desired width)
4. **Footer** — `<Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />`

Wrap header + content + footer in `<LayoutFlow gap="3xl">` to stack them correctly.

### MaxWidthLayout padding

Apply inline padding to the **first child**, not to `MaxWidthLayout` itself:

```tsx
// Correct
<MaxWidthLayout size="md" className="rvo-padding-block-start--xl">
  <Grid columns="three" gap="xl" className="rvo-padding-inline-start--md rvo-padding-inline-end--md">
    ...
  </Grid>
</MaxWidthLayout>

// Wrong
<MaxWidthLayout size="md" className="rvo-padding-inline-start--md rvo-padding-inline-end--md">
  ...
</MaxWidthLayout>
```

### Cards with link titles

Always set `linkProps={{ noUnderline: true }}` on `<Card>` when the title is a link. Card titles are already recognisable as links through context and colour — an underline is redundant and visually disruptive.

### Accessible colour combinations (WCAG 2.1 AA)

Only use combinations from the official ROOS list in `documentation/pages/design-tokens/design-tokens.color.mdx`. The most commonly used accessible combinations:

**Text on light backgrounds:**

- donkerblauw / lintblauw / zwart / grijs-700..900 on: wit, grijs-050..300, lichtblauw-150..450, donkerblauw-150..300, hemelblauw-150..300, all pastel tints (-150)

**Text on dark backgrounds:**

- wit / grijs-050..100 / lichtblauw-150 / donkerblauw-150 / hemelblauw-150 on: donkerblauw, lintblauw, grijs-600..900, zwart

**Common mistake — not accessible:**

- hemelblauw (#007BC7) on lichtblauw-150 (#EEF7FC): contrast ~4.2:1 — use donkerblauw on lichtblauw-150 instead
- hemelblauw on wit IS accessible (4.55:1)
- On coloured backgrounds, always use `color="donkerblauw"` for links instead of the default `hemelblauw`

## Available components (`@nl-rvo/component-library-react`)

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
MenuBar, MenuBarItem, SubMenu, List,
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

Use `noMargins` when managing spacing yourself via `LayoutFlow`.

## LayoutFlow

```tsx
<LayoutFlow gap="0|3xs|2xs|xs|sm|md|lg|xl|2xl|3xl|4xl|5xl" direction="column|column-inline|row|row-inline">
```

Spacing scale in px: `3xs`=2, `2xs`=4, `xs`=8, `sm`=12, `md`=16, `lg`=18, `xl`=24, `2xl`=32, `3xl`=48, `4xl`=64, `5xl`=128.

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

## Icons (commonly used)

`home`, `user`, `plus`, `kruis`, `vinkje`, `zoek`, `info`, `let-op`, `pijl-naar-rechts`, `pijl-omlaag`, `pijl-omhoog`, `terug`, `inloggen`, `instellingen`, `mail`, `telefoon`, `kalender`, `klok`, `downloaden`, `upload`, `bewerken`, `verwijderen`, `externe-link`, `menu`, `meer`, `refresh`, `publicatie`, `locatiemarker`, `favoriet`, `printer`, `save`, `delen`, `delta-naar-links`, `delta-naar-rechts`, `delta-omhoog`, `delta-omlaag`

Full list: `packages/component-library-react/src/components/icon/types.ts`.

## Design tokens — reference

**Max-width:** `--rvo-layout-max-width-sm`=608px, `--rvo-layout-max-width-md`=912px, `--rvo-layout-max-width-lg`=1280px

**Spacing:** `--rvo-space-3xs`=2px, `--rvo-space-2xs`=4px, `--rvo-space-xs`=8px, `--rvo-space-sm`=12px, `--rvo-space-md`=16px, `--rvo-space-lg`=18px, `--rvo-space-xl`=24px, `--rvo-space-2xl`=32px, `--rvo-space-3xl`=48px, `--rvo-space-4xl`=64px, `--rvo-space-5xl`=128px

**Colours:** `wit`, `zwart`, `grijs-050` to `grijs-900`, `donkerblauw`, `hemelblauw`, `lichtblauw`, `lintblauw`, `groen`, `rood`, `oranje`, `donkergeel`, `violet`. Each colour has tints: `--rvo-color-[name]-150/300/450/600/750` (light to dark). Full overview: `proprietary/design-tokens/dist/index.css`.

**Font-size:** `--rvo-font-size-2xs`=0.625rem to `--rvo-font-size-4xl`=3rem (`xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`).

## Helper classes (max-width layout)

- `rvo-max-width-layout` + `rvo-max-width-layout--sm|md|lg` (centered, max-width)
- `rvo-max-width-layout--uncentered` (no auto-margin)
- `rvo-max-width-layout-inline-padding--sm|md|lg` (horizontal padding)

## Utility classes

Available as React component and as CSS class. See `utilities/utility-*/src/index.scss` for full lists: margin, padding, text (colour/size/weight), background, border.

## Changesets

Before every commit, check whether the staged changes touch a published package. If yes, create a changeset first and include it in the same commit.

Before creating a new changeset, check whether the branch already has one (`ls .changeset/`). If one exists and the new changes logically belong together, extend it instead of creating a new one.

- **Filename**: random adjective-noun-verb slug (e.g. `brave-foxes-sleep.md`) — never a descriptive name.
- **Language**: always English.
- **Format**:

  ```markdown
  ---
  "@nl-rvo/css-<component>": patch
  ---

  type(scope): short imperative subject line

  One paragraph explaining what changed and why, written as a human-readable description for the changelog.
  ```

- **Bump type**: `patch` for fixes and small improvements, `minor` for new features, `major` for breaking changes.
- Always include `@nl-rvo/component-library-css` and `@nl-rvo/component-library-react` in every changeset that touches a component.
- Always include `@nl-rvo/design-tokens` when any file under `proprietary/design-tokens/` is changed.
- Always include every utility package (`@nl-rvo/utility-*`) whose `package.json` was modified.

## Things to avoid

- Hardcoded colours, spacing, or font sizes — always use CSS custom properties.
- Default exports for components.
- Installing packages not yet 24 hours in the registry.
- Node versions outside `>=24 <=25`.
- Internal deps without `workspace:*` protocol.
- Any changes outside `documentation/` without explicit permission.
