# @nl-rvo/react-form-textarea

## 1.0.3

### Patch Changes

- a3e14e9: Align textarea styling with textinput

  - Switch textarea to render `utrecht-textarea` classes so it inherits padding,
    font-family, font-size, color, and border tokens from the utrecht base +
    `--utrecht-form-control-*` tokens.
  - Focus and invalid-focus states now match textinput exactly (outline
    color/width/style + `--rvo-textbox-outline-offset`,
    `--rvo-textbox-invalid-focus-*`).
  - Widths use `--utrecht-textarea-max-inline-size`
    (`--rvo-textbox-{xs,sm,md,lg}-width`) instead of hardcoded `inline-size`.
  - Remaining-chars span renamed from `rvo-textarea__remaining-chars` to
    `utrecht-textarea-remaining-chars` to align with textinput.

- Updated dependencies [a3e14e9]
  - @nl-rvo/css-form-textarea@1.6.2

## 1.0.2

### Patch Changes

- ef698d1: Update package.json to include default exports
- Updated dependencies [ef698d1]
  - @nl-rvo/css-form-textarea@1.6.1

## 1.0.1

### Patch Changes

- 6ba10cb: Update package.json with a public field

## 1.0.0

### Major Changes

- b1b55a0: First version of this React Component

### Patch Changes

- Updated dependencies [b1b55a0]
  - @nl-rvo/css-form-textarea@1.6.0
