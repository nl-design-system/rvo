# `@nl-rvo/css-button`

## 2.0.0

### Major Changes

- 5442d67: Removed third party Button Component to use own button setup and updated clasnames.
  Removed the following parameters which where used through Storybook or no longer required:

  - active
  - busy
  - focus
  - focusVisible
  - hover
  - alignToRightInGroup

  Using new classname for button: `rvo-button` instead of `utrecht-button`. All other class names using the previous classnames have also been updated with the classname prefix.
  Removed allButtons export from Component, as this is only used in Storybook Stories.

  Style Changes:
  No direct changes in the display of the Compnent, but the naming convension of the Component has been updated to use `.rvo-button` as prefix, instead of `.utrecht-button`.

### Minor Changes

- 3a6a613: Add correct icon before/after margins.

## 1.1.6

### Patch Changes

- 064091a: Fix some markdown error for alert and button component.
  Updated @whitespace/storybook-addon-html to the latest version to remove warning messages during the build process.
  Added remark-gfm dependency to enable rendering of tables inside Markdown.

## 1.1.5

### Patch Changes

- 23ea461: button css fixes

## 1.1.4

### Patch Changes

- f75e111: Added spacing between button icon and its content

## 1.1.3

### Patch Changes

- e0aff8b: Underline visible for all button types on hover

## 1.1.2

### Patch Changes

- 6451d00: Fixed quaternary color for button

## 1.1.1

### Patch Changes

- 19e94e5: Fix alignToRight className for Button component (when using it in a ActionGroup)

## 1.1.0

### Minor Changes

- 0cdf4eb: Remove utrecht-components-css reference and include utrecht css per component when needed

## 1.0.0

### Major Changes

- daa0537: Create npm package for each component.

## Pre-releases

_@nl-rvo/component-library-css@1.0.0-alpha.290_:
Added support for icon aria-label

_@nl-rvo/component-library-css@1.0.0-alpha.279_:
Simplified snippet by removing `.rvo-layout-row-inline`, `.rvo-layout-gap--xs`. `.rvo-layout-gap--sm` and `.rvo-layout-gap--md`

_@nl-rvo/component-library-css@1.0.0-alpha.2_:
Added component
