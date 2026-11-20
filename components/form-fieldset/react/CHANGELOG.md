# @nl-rvo/react-form-fieldset

## 1.1.0

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

### Patch Changes

- Updated dependencies [38d8844]
  - @nl-rvo/css-form-fieldset@1.8.0

## 1.0.2

### Patch Changes

- ef698d1: Update package.json to include default exports
- Updated dependencies [ef698d1]
  - @nl-rvo/css-form-fieldset@1.7.1

## 1.0.1

### Patch Changes

- 6ba10cb: Update package.json with a public field

## 1.0.0

### Major Changes

- b1b55a0: First version of this React Component

### Patch Changes

- Updated dependencies [b1b55a0]
  - @nl-rvo/css-form-fieldset@1.7.0
