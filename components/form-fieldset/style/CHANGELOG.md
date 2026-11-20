# `@nl-rvo/css-form-fieldset`

## 1.8.0

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

## 1.7.1

### Patch Changes

- ef698d1: Update packages.json to have default exports

## 1.7.0

### Minor Changes

- b1b55a0: Updated package setup and how css is generated

## 1.6.1

### Patch Changes

- 084a230: Ensure package is published with provenance

## 1.6.0

### Minor Changes

- 8c0a7f8: Update related utrecht css packages.

## 1.5.0

### Minor Changes

- fa36e07: Project structure updates

  - Moved all Storybook stories to the /stories directory.
  - Moved all documentation files to the /docs directory.
  - Removed React components from library-component-react and moved them into this package.
  - Update all .stories imports to the right react package "component-library-react"
  - Fix all Redundant / PascalCase lint warnings for .stories files.

## 1.4.1

### Patch Changes

- 11eb258: Update imports to support storybook v10

## 1.4.0

### Minor Changes

- 5442d67: Removed third party component imports and updated CSS to be inline with the original designs

## 1.3.0

### Minor Changes

- ca618f4: The fieldId prop is no longer mandatory and the for attribute is now derived from the id prop instead.

## 1.2.0

### Minor Changes

- 0cdf4eb: Remove utrecht-components-css reference and include utrecht css per component when needed

## 1.0.1

### Patch Changes

- c029d6a: Make legend in Fieldset optional

## 1.0.0

### Major Changes

- daa0537: Create npm package for each component.

## Pre-releases

_@nl-rvo/component-library-css@1.0.0-alpha.17_:
Added component
