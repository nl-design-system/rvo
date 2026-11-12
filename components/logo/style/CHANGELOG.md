# `@nl-rvo/css-logo`

## 1.5.2

### Patch Changes

- b56f374: fix(logo): use rvo-link states for the logo title link

  The logo title link no longer draws a large double outline around the whole logo on focus. The title is now a regular `rvo-link` (lintblauw), so it shares the focus state of every other link. Font weight stays the same in every state, there is no underline on hover and no background on focus. The whole logo stays clickable through the existing overlay.

## 1.5.1

### Patch Changes

- ef698d1: Update packages.json to have default exports

## 1.5.0

### Minor Changes

- b1b55a0: Updated package setup and how css is generated

## 1.4.0

### Minor Changes

- bcc44ec: Removed link behaviour from Header component to Logo component and fixed logo link focus state.

### Patch Changes

- 084a230: Ensure package is published with provenance

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

- daa0537: Create npm package for each component.

## Pre-releases

_@nl-rvo/component-library-css@1.0.0-alpha.3_:
Added component
