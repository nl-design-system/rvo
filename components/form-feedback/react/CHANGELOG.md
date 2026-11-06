# @nl-rvo/react-form-feedback

## 1.0.3

### Patch Changes

- 0d60d9a: fix(form-feedback): use correct icon color for error state

  The error icon was always rendered with the warning class (`rvo-status-icon-waarschuwing`), causing it to appear yellow. Removed the hardcoded className so StatusIcon applies `rvo-status-icon-foutmelding` automatically based on its type prop, rendering the icon in red as intended.

## 1.0.2

### Patch Changes

- ef698d1: Update package.json to include default exports
- Updated dependencies [ef698d1]
- Updated dependencies [ef698d1]
  - @nl-rvo/react-status-icon@1.0.2
  - @nl-rvo/css-form-feedback@1.5.1

## 1.0.1

### Patch Changes

- 6ba10cb: Update package.json with a public field
- Updated dependencies [6ba10cb]
  - @nl-rvo/react-status-icon@1.0.1

## 1.0.0

### Major Changes

- b1b55a0: First version of this React Component

### Patch Changes

- Updated dependencies [b1b55a0]
- Updated dependencies [b1b55a0]
  - @nl-rvo/react-status-icon@1.0.0
  - @nl-rvo/css-form-feedback@1.5.0
