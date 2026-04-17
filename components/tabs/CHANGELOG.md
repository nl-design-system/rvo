# `@nl-rvo/css-tabs`

## 2.0.0

### Major Changes

- 914bb25: ### New

  - Refactored Tabs to an `items`-based API with explicit panel content.
  - Added full WAI-ARIA keyboard support (roving tabindex, Home/End, arrows, optional `activationMode="manual"`).
  - Added `before` / `after` slots for tab items (icons, badges, counters).
  - Added `size` variants (`sm`/`md`/`lg`) and token-friendly styling using CSS custom properties + logical properties.

  ### Deprecated / Breaking

  - Deprecated legacy `tabs` prop and `TabItem` composition API (fallback still supported temporarily).
  - Tabs should now be defined via `items`; panels are required per item.

## 1.3.0

### Minor Changes

- fa36e07: Project structure updates

  - Moved all Storybook stories to the /stories directory.
  - Moved all documentation files to the /docs directory.
  - Removed React components from library-component-react and moved them into this package.
  - Update all .stories imports to the right react package "component-library-react"
  - Fix all Redundant / PascalCase lint warnings for .stories files.

## 1.2.1

### Patch Changes

- 11eb258: Update imports to support storybook v10

## 1.2.0

### Minor Changes

- 0cdf4eb: Remove utrecht-components-css reference and include utrecht css per component when needed

## 1.0.0

### Major Changes

- 5a3bda4: Added tabs component

## 1.0.0

### Major Changes

- daa0537: Create npm package for each component.

## Pre-releases

_@nl-rvo/component-library-css@1.0.0-alpha.139_:
Added component
