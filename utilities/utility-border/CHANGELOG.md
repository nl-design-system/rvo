# @nl-rvo/utility-border

## 1.2.0

### Minor Changes

- 38d8844: feat(form-fieldset): clean up fieldset styling and add border-radius utilities

  Removes background colour, padding, and border radius from `rvo-form-fieldset`.
  Those visual responsibilities now belong to the wrapping element, composable via
  existing utilities (`rvo-bg--grijs-100`, `rvo-padding--xl`, `rvo-layout-column`,
  `rvo-layout-gap--xl`, `rvo-border-start-end-radius--2xl`). Also resets browser
  defaults (`min-inline-size`, `padding`, `margin`) and adds a `legend-gap` token
  to control the spacing between the legend and the first field independently of the
  field-to-field gap.

  Adds `rvo-border-radius--{sm|md|lg|xl|2xl}` for uniform border radius and
  `rvo-border-{start-start|start-end|end-start|end-end}-radius--{size}` for
  per-corner logical-property variants to `utility-border`.

  Also fixes a bug where the form-field description element was always rendered as
  an empty `<div>` even when no `helperText` or `expandableHelperText` was provided.

## 1.1.2

### Patch Changes

- d0debaf: fix(button, link): replace focus ring with underline, align hover/focus styles

  All button variants now show a 4px underline on focus instead of the Utrecht focus ring. Solid variants (primary, secondary, quaternary, warning) use their existing text color for the underline. Subtle, tertiary, and warning-subtle keep their base colors (donkerblauw, hemelblauw, rood) on focus and when hovering a focused button. Hover also adds a 2px underline for all variants without changing background or text color.

  The link component now uses a text-underline-offset of 25% at all states (base, hover, active, focus). This ensures the underline remains visible even with descender-heavy text — without sufficient offset the line was hidden behind characters like g, j, and y.

## 1.1.1

### Patch Changes

- 084a230: Ensure package is published with provenance

## 1.1.0

### Minor Changes

- fa36e07: Project structure updates

  - Moved all Storybook stories to the /stories directory.
  - Moved all documentation files to the /docs directory.
  - Removed React components from library-component-react and moved them into this package.
  - Update all .stories imports to the right react package "component-library-react"
  - Fix all Redundant / PascalCase lint warnings for .stories files.

## 1.0.1

### Patch Changes

- 11eb258: Update imports to support storybook v10

## 1.0.0

### Major Changes

- da7c279: Add a new utility for border colors.
