# RVO Design System — Instructions

All instructions in this file must be written in English.

Monorepo (`@nl-rvo/design-system`) built on [NL Design System](https://nldesignsystem.nl/). Provides design tokens, CSS components, and React wrappers for Dutch government applications.

## Pre-commit checklist

- [ ] Separate branch created — not committing directly to `master`
- [ ] Branch name follows `type/short-description`, with the Jira key when there is a ticket (e.g. `fix/ROOS-123-short-description`)
- [ ] Prettier run: `pnpm format`
- [ ] Lint run: `pnpm lint`
- [ ] Commit message follows `type(scope): description` and states the problem the change solves
- [ ] Commit message, code comments, and changeset are in English
- [ ] If any component was touched: changeset is present and covers all affected packages
- [ ] If a component changes visually, or is added, removed or deprecated: a design tooling issue for the lead is created (see [Design tooling issues](#design-tooling-issues))

## Language

- Write changesets, release notes, commit messages, and CSS comments in English.
- Write documentation pages in Dutch, at B1 language level, in a clear business-like style.
- Consult the schrijfwijzer in `packages/docusaurus/pages/schrijfwijzer/` for all writing decisions.

## Design tooling issues

Code is the source of truth. The design tooling (Figma and/or Penpot) must match the code. Create a GitHub issue for the lead when a PR:

- changes a component visually, for example through the CSS packages or design tokens;
- adds a component;
- removes or deprecates a component.

Rules for the issue:

- Write the issue in Dutch, unlike the rest of these instructions.
- Assign the issue to the lead.
- Leave out focus states. The design tooling does not show focus states. Do not create an issue when a change only affects focus states.
- Use short, clear sentences. Keep the issue concise and business-like.
- Add no other comments or context. The only link is the link to the PR, as the last line of the description.
- Title: a clear description of what must change in the design tooling, for example `Button Secondary: achtergrondkleur aanpassen in Figma en Penpot`.
- Description: use the template below. List per component what must change, as bullets, for example `Button Secondary: achtergrondkleur naar wit`.
- The lead creates a Jira ticket on the ROOS board for the issue.

```markdown
Als Lead wil ik dat de design tooling omgeving wordt aangepast zodat deze overeenkomt met de code. De volgende dingen moeten aangepast worden:

- <Component>: <wat er aangepast moet worden>

Pull request: <link naar de PR>
```

## Git workflow

- Always create branches from `master`.
- Never commit directly to `master`.
- Make every commit, push, and pull request on your own branch. Create a new branch for each separate change, and do not add unrelated changes to a branch that already has a pull request.
- Name branches using the pattern `type/short-description` in lowercase kebab-case, using the types from [Conventional Commits](#conventional-commits). Add the Jira key when there is a ticket: `fix/ROOS-123-short-description`.
- When the PR touches components, add the ROOS core team as reviewer: [@PLassche-dictu](https://github.com/PLassche-dictu), [@joana-dictu](https://github.com/joana-dictu). PRs that only affect patterns or demopages do not require these reviewers.
- The person who opens the pull request is responsible for all committed code in that PR. A commit or PR can never have a co-author.
- Keep the PR title and the first line of every commit at 72 characters or fewer. GitHub fills the PR title from the first commit of a single-commit PR and moves anything beyond the limit into the description. Put the reason for the change in the commit body, not in the first line.
- Keep the PR description concise and to the point. Do not describe what changed ("changed", "added", "updated"): the changed files already show that.
- Always state why the change was made in the PR description, for example: "to align with the overarching Rijkshuisstijl guidelines."
- Keep the PR description about the change only. Do not justify what is left out, such as why no reviewers, changeset, or tests are needed.

### Conventional Commits

Use the [Conventional Commits](https://www.conventionalcommits.org/) format `type(scope): description` for commit messages, pull request titles, issue titles, and the first line of a changeset. One format everywhere keeps the history scannable and makes the impact of a change clear from its title alone. Pull requests are squash-merged, so the PR title becomes the commit message on `master`.

**Types:**

| Type       | Use for                                                     |
| ---------- | ----------------------------------------------------------- |
| `feat`     | New functionality                                           |
| `fix`      | Bug fixes                                                   |
| `a11y`     | Accessibility fixes and improvements                        |
| `docs`     | Documentation and instructions only                         |
| `style`    | Visual styling changes, such as tokens or CSS without logic |
| `refactor` | Code restructuring without behaviour change                 |
| `perf`     | Performance improvements                                    |
| `test`     | Adding or changing tests                                    |
| `build`    | Build tooling, bundling, and package output                 |
| `ci`       | GitHub workflows and CI configuration                       |
| `chore`    | Maintenance, config, and dependencies                       |

Issue titles describe the problem instead of the solution, so they use `bug` instead of `fix`: `bug(input): focus indicator is missing`. A `bug` issue is resolved by a `fix` PR.

**Scope:** the component, package, or area that changes, in lowercase kebab-case: `fix(button): …`, `docs(instructions): …`, `chore(design-tokens): …`. Separate multiple scopes with a comma: `fix(button, link): …`. Leave the scope out when the change is repo-wide: `chore: update dependencies`.

**Description:**

- Concise and states the problem the change solves.
- Lowercase, imperative: "fix button color", not "fixed button color".
- No trailing period.

**Breaking changes:** add `!` after the type or scope: `feat(button)!: remove the size prop`. A breaking change asks for extra care in review and must be announced to everyone who uses the affected packages.

**Version bumps:** the type predicts the changeset bump type.

- `fix`, `a11y`, `style`, `perf` → `patch`
- `feat` → `minor`
- any type with `!` → `major`

**Scripts:** name new `package.json` scripts with the same types, as `type:target`, for example `build:tokens`, `test:themes`, `docs:generate`. The existing `lint:*` scripts keep their names.

## Documentation

- Before every change, consult the documentation of existing components and patterns.
- Use the available templates for new components, documentation pages, changesets, and test files.
- Do not design visual solutions on your own initiative. Visual design is the responsibility of the designer, not the developer.

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
  react/
    src/
      <Name>.tsx        # React component
      <Name>.types.ts   # TypeScript types
      index.ts
  style/
    src/
      <name>.scss       # BEM + design tokens
  package.json          # @nl-rvo/css-<name>
  README.mdx
  CHANGELOG.md
```

Stories live in `packages/storybook/components/<Name>/<name>.stories.tsx`.
Docusaurus pages live in `packages/storybook/components/<Name>/<name>.docpage.mdx`.

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
- Follow the [NL Design System token architecture](https://nldesignsystem.nl/handboek/huisstijl/design-tokens/): a component's SCSS only references its own component tokens (`--rvo-<component>-*`). Component tokens in turn reference common or brand tokens, and that mapping lives in the token files, not in the SCSS. Do not reference common tokens such as `--rvo-space-*` or `--rvo-font-size-*` directly in component SCSS. Create a component token instead, for example `--rvo-<component>-<size>-gap`.
- Never add fallback values to `var()` for design tokens (`var(--rvo-tabs-gap, 8px)`). Component tokens are always defined by `@nl-rvo/design-tokens`; a fallback hides a missing or misnamed token.
- No inline styles. No custom CSS outside the component's own `index.scss`.
- BEM naming. Use SCSS nesting for BEM modifiers (`&--modifier`), pseudo-classes (`&:hover`), and child selectors — not for arbitrary descendants.
- Import `index.scss` inside `template.tsx`.

### Modern web guidance

For every task that touches HTML, CSS, or client-side JavaScript (focus and hover states, forms, dialogs and popovers, layout, animation, accessibility, performance), always check the [Modern Web Guidance](https://github.com/GoogleChrome/modern-web-guidance) skill **before** implementing:

1. Search with `npx -y modern-web-guidance@latest search "<2-5 word query>"`.
2. Retrieve the matching guides with `npx -y modern-web-guidance@latest retrieve "<id>"` and read them in full.
3. Check the result against the guide before finishing, and name the guides you applied in the summary.

Rules for using it:

- The rules in this file take precedence over the guides: design tokens, BEM, existing components, and "do not design visual solutions on your own initiative" still apply.
- Follow the fallback recommendations of a guide for features that are not Baseline widely available.
- Skip it for backend, tooling, and copy-only changes.
- The skill is installed locally per developer. Do not add it to this repository.

### Browser automation (agent-browser)

When [agent-browser](https://agent-browser.dev/) is available, use it for all browser tasks, such as checking Storybook stories or Docusaurus pages.

- Run it headless by default. Do not use `--headed` for checks the agent does on its own: verifying changes, snapshots, screenshots, reading pages, testing flows.
- Use `--headed` only when the user explicitly asks to see or check something, for example "open Storybook with the button component" or "show me the page".
- Headed or headless is fixed when the browser launches. Run `agent-browser close` before switching modes.
- Leave a headed browser open after the task so the user can look at it. Close a headless browser when finished.
- agent-browser is installed locally per developer. Do not add it to this repository.

### Docusaurus pattern pages (`.docusaurus.mdx`)

- Both `<ComponentExample>` previews and fenced code examples must use **plain HTML with BEM/CSS classes** — never React components or TSX.
- Language tag: ` ```html `.
- Use correct BEM class names as rendered (e.g. `rvo-link`, `rvo-heading`, `rvo-button--primary`).
- Do not import React components in pattern pages — use the rendered HTML elements and classes directly.
- Links in running text must use an `<a>` tag with `className="rvo-link"` — never a bare Markdown link. Example: `<a href="/rvo/docs/components/foo" className="rvo-link">Foo</a>`.

### Storybook stories

- Story files live in `packages/storybook/components/<Name>/`, not in the component folder.
- Split into separate files for many variants (e.g. `button.kinds.stories.tsx`).
- Do not set default text values in stories — `defaultArgs` for textual content has been removed from components.

### Design tokens

- Defined in `proprietary/design-tokens/src/components/rvo/<name>.tokens.json`.
- Pattern: `--rvo-<component>-<property>`.
- When adding or changing tokens, update both token files in sync:
  1. `proprietary/design-tokens/src/components/rvo/<name>.tokens.json` — token values
  2. `proprietary/design-tokens/figma/figma.tokens.json` — Figma sync values, generated by `pnpm --filter @nl-rvo/design-tokens build`
- Components do not need a `design-tokens.json`. The build only reads `*.tokens.json` files, so do not add a `components/<name>/design-tokens.json`.
- **Always look for an existing brand or common token before using a hardcoded value.** Check `proprietary/design-tokens/src/brand/` and `proprietary/design-tokens/src/common/` first. Use a token reference (`{rvo.*}`) whenever one exists. If no matching token exists, notify the team before writing a hardcoded value.

### Package naming

- CSS: `@nl-rvo/css-<component>`
- React: `@nl-rvo/react-<component>`
- Design tokens: `@nl-rvo/design-tokens`
- Build utils: `@nl-rvo/build-utils-css`

### Dependencies between components

A package always depends on packages from its own library (layer), never across layers:

- A React package (`@nl-rvo/react-<component>`) depends on other `@nl-rvo/react-*` packages and uses their components. Example: the Logo renders `<Link>` from `@nl-rvo/react-link`, not an `<a class="rvo-link">` with a dependency on `@nl-rvo/css-link`.
- A CSS package (`@nl-rvo/css-<component>`) depends on other `@nl-rvo/css-*` packages only.
- The only link between the two layers is that `@nl-rvo/react-<component>` depends on its own `@nl-rvo/css-<component>`.
- Use `workspace:*` for every internal dependency.

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

- **First line**: follows [Conventional Commits](#conventional-commits), usually the same as the PR title.
- **Bump type**: `patch` for fixes and small improvements, `minor` for new features, `major` for breaking changes. It matches the commit type, see [Conventional Commits](#conventional-commits).
- Always include `@nl-rvo/component-library-css` and `@nl-rvo/component-library-react` in every changeset that touches a component.
- Always include `@nl-rvo/design-tokens` when any file under `proprietary/design-tokens/` is changed.
- Always include every utility package (`@nl-rvo/utility-*`) whose `package.json` was modified.

## Prototyping

Prototypes live in `packages/storybook/documentation/demopages/`:

| Type         | Folder                                                                |
| ------------ | --------------------------------------------------------------------- |
| Experimental | `packages/storybook/documentation/demopages/experimenteel/<project>/` |
| Example      | `packages/storybook/documentation/demopages/voorbeelden/<project>/`   |
| Template     | `packages/storybook/documentation/demopages/templates/`               |
| Prototype    | `packages/storybook/documentation/demopages/prototypes/<project>/`    |

Each folder contains `<PageName>.tsx` + `<PageName>.stories.tsx`.

Confirm the type (experimental, example, template, or prototype) before starting.

Existing demopages as reference:

- `…/demopages/templates/` — Basispagina, Content, Dashboard, Formulier (base patterns)
- `…/demopages/voorbeelden/` — worked-out examples per application (berichtenbox, www, sib)
- `…/demopages/experimenteel/` — experimental patterns (filter, sitewide-alert, subsidiewijzer)
- `…/demopages/prototypes/` — prototypes (www, algemeen)
- `…/demopages/common/` — shared defaults (footer items, menubar items)

### Rules

- Only use React components from `@nl-rvo/component-library-react`, or HTML/CSS components — both are allowed.
- Use only ROOS helper classes (utility classes and layout classes like `rvo-max-width-layout--sm/md/lg`).
- No inline `style={{}}` and no custom SCSS — use design tokens and utility classes only.
  - **Exception (experimental only):** inline styles / custom SCSS allowed when no token or utility class exists.
- No hardcoded colour values — always use design tokens (e.g. `var(--rvo-color-...)`). Do not use tokens that don't exist in ROOS.
- No interactive code (state, event handlers) unless explicitly requested.
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

## Available components (`@nl-rvo/component-library-react`)

Individual components are also installable separately, e.g. `@nl-rvo/react-button`. You still need the `rvo-theme` class and `@nl-rvo/design-tokens` for correct styling.

```text
Accordion (+ Accordion.Item), ActionGroup, Alert, Breadcrumbs, BreadcrumbsItem,
Button, Card, CardExperimental, CheckBoxFilter, CounterBadge, DataList, DataListItem,
Dialog, ExpandableContent, ExpandableTable, Favicon, Footer,
Autocomplete, Checkbox, CheckboxGroup, DateInput, Feedback,
FormField (+ FormField.Text, FormField.Date, FormField.Checkbox, FormField.CheckboxGroup,
  FormField.FileInput, FormField.RadioButton, FormField.RadioButtonGroup,
  FormField.Select, FormField.TextArea), Label, Fieldset,
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
<Heading type="h1|h2|h3|h4|h5|h6" noMargins? fontWeightNormal? iconPlacement="left|right" icon={IconType}>
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

## Component patterns

### FormField

`FormField` uses sub-components to render the input element. Pass exactly one sub-component as a child:

```tsx
<FormField label="Name">
  <FormField.Text />
</FormField>
```

Supported sub-components: `FormField.Text`, `FormField.Date`, `FormField.Checkbox`, `FormField.CheckboxGroup`, `FormField.FileInput`, `FormField.RadioButton`, `FormField.RadioButtonGroup`, `FormField.Select`, `FormField.TextArea`. Each sub-component accepts the props of the underlying input element. Only one child per `FormField` is supported.

### Accordion

Use `Accordion.Item` as child — not the standalone `AccordionItem` component:

```tsx
<Accordion>
  <Accordion.Item label="Title">Content</Accordion.Item>
</Accordion>
```

### MenuBar

`MenuBarMobile` no longer exists — `MenuBar` handles both desktop and mobile via CSS media queries.

### iconPlacement

The `showIcon` prop has been removed. Use `iconPlacement="left|right"` instead. The prop is optional and not required.

### children over content

The `content` prop has been removed from all components. Use `children` instead.

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

## Common mistakes

**General:**

- Hardcoded colours, spacing, or font sizes — always use CSS custom properties.
- Default exports for components.
- Installing packages not yet 24 hours in the registry.
- Node versions outside `>=24 <=25`.
- Internal deps without `workspace:*` protocol.
- Any changes outside `documentation/` without explicit permission.

**Colour accessibility:**

- hemelblauw (#007BC7) on lichtblauw-150 (#EEF7FC): contrast ~4.2:1 — use donkerblauw on lichtblauw-150 instead
- hemelblauw on wit IS accessible (4.55:1)
- On coloured backgrounds, always use `color="donkerblauw"` for links instead of the default `hemelblauw`
