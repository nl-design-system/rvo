# `@nl-rvo/css-action-group`

## 1.3.1

### Patch Changes

- 11eb258: Update imports to support storybook v10

## 1.3.0

### Minor Changes

- 5442d67: Remove third party ButtonGroup component and replaced this with a div.
  Renamed class .utrecht-button-group to .rvo-button-group and added additional changes to the CSS of the Action Group Component.

## 1.2.1

### Patch Changes

- ebc6d8e: Removed rvo class `.rvo-button-group__align-right` causing position issues with the second button. Added parameter `position` allowing action groups to be placed left or right. Default this is the left position

## 1.2.0

### Minor Changes

- 0cdf4eb: Remove utrecht-components-css reference and include utrecht css per component when needed

## 1.1.0

### Minor Changes

- fc69881: Renamed ButtonGroup to ActionGroup

## 1.0.0

### Major Changes

- daa0537: Create npm package for each component.

## Pre-releases

_@nl-rvo/component-library-css@1.0.0-alpha.362_:
Removed rvo classes and renamed `.rvo-button-group__align-right` to `.utrecht-button-group__align-right`

_@nl-rvo/component-library-css@1.0.0-alpha.158_:
Replaced spacer component (`.rvo-button-group__spacer`) with classname `.rvo-button-group__align-right`

_@nl-rvo/component-library-css@1.0.0-alpha.69_:
Added component
