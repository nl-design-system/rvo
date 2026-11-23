# @nl-rvo/react-progress-tracker

## 1.0.4

### Patch Changes

- 1400da9: fix(progress-tracker): use the link component states for step links

  The step links of the progress tracker overrode the underline with a custom `text-decoration` rule, which reset the underline thickness on hover and focus. The step links now use the `noUnderline` option of the link component, so hover and focus look the same as the link component: an underline of 2px on hover and 4px on focus. The links still have no underline in the rest state.

- Updated dependencies [1400da9]
  - @nl-rvo/css-progress-tracker@1.4.3
  - @nl-rvo/react-link@1.0.4

## 1.0.3

### Patch Changes

- Updated dependencies [1bbc261]
- Updated dependencies [e52e9fd]
  - @nl-rvo/react-link@1.0.3
  - @nl-rvo/css-progress-tracker@1.4.2

## 1.0.2

### Patch Changes

- ef698d1: Update package.json to include default exports
- Updated dependencies [ef698d1]
- Updated dependencies [ef698d1]
  - @nl-rvo/react-link@1.0.2
  - @nl-rvo/css-progress-tracker@1.4.1

## 1.0.1

### Patch Changes

- 6ba10cb: Update package.json with a public field
- Updated dependencies [6ba10cb]
  - @nl-rvo/react-link@1.0.1

## 1.0.0

### Major Changes

- b1b55a0: First version of this React Component

### Patch Changes

- Updated dependencies [b1b55a0]
- Updated dependencies [b1b55a0]
  - @nl-rvo/react-link@1.0.0
  - @nl-rvo/css-progress-tracker@1.4.0
