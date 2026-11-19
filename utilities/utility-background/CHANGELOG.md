# @nl-rvo/utility-background

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

- da7c279: Add a new utility for background colors.
