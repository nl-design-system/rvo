# @nl-rvo/react-logo

## 1.0.3

### Patch Changes

- b56f374: fix(logo): use rvo-link states for the logo title link

  The logo title link no longer draws a large double outline around the whole logo on focus. The title is now a regular `rvo-link` (lintblauw), so it shares the focus state of every other link. Font weight stays the same in every state, there is no underline on hover and no background on focus. The whole logo stays clickable through the existing overlay.

- Updated dependencies [1bbc261]
- Updated dependencies [b56f374]
  - @nl-rvo/react-link@1.0.3
  - @nl-rvo/css-logo@1.5.2

## 1.0.2

### Patch Changes

- ef698d1: Update package.json to include default exports
- Updated dependencies [ef698d1]
  - @nl-rvo/css-logo@1.5.1

## 1.0.1

### Patch Changes

- 6ba10cb: Update package.json with a public field

## 1.0.0

### Major Changes

- b1b55a0: First version of this React Component

### Patch Changes

- Updated dependencies [b1b55a0]
  - @nl-rvo/css-logo@1.5.0
