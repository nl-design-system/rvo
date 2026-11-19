# @nl-rvo/react-form-field

## 1.0.4

### Patch Changes

- 8af4738: Change the import paths for utilities functions.
- fc941a9: fix(form-field, radio-button, checkbox): make labels fully clickable and show pointer cursor

  The form-field label had `id={id}` instead of `htmlFor={id}`, which meant clicking
  the label did not activate the associated form control (e.g. checkbox, text input).
  Also fixes a mismatch where `aria-labelledby` referenced `${id}-label` but the
  label's id was `${id}`. Radio button and checkbox labels now show a pointer cursor
  on hover (via `--utrecht-action-activate-cursor`) and a not-allowed cursor when disabled.

- Updated dependencies [0d60d9a]
- Updated dependencies [8af4738]
- Updated dependencies [a3e14e9]
  - @nl-rvo/react-form-feedback@1.0.3
  - @nl-rvo/react-form-textarea@1.0.3
  - @nl-rvo/react-form-checkbox@1.0.3
  - @nl-rvo/react-form-radio-button@1.0.3
  - @nl-rvo/react-form-checkbox-group@1.0.3
  - @nl-rvo/react-form-radio-button-group@1.0.3

## 1.0.3

### Patch Changes

- ef698d1: Update package.json to include default exports
- Updated dependencies [ef698d1]
- Updated dependencies [ef698d1]
  - @nl-rvo/react-expandable-content@1.0.2
  - @nl-rvo/react-form-checkbox@1.0.2
  - @nl-rvo/react-form-checkbox-group@1.0.2
  - @nl-rvo/react-form-feedback@1.0.2
  - @nl-rvo/react-form-file-input@1.0.3
  - @nl-rvo/react-form-radio-button@1.0.2
  - @nl-rvo/react-form-radio-button-group@1.0.2
  - @nl-rvo/react-form-select@1.0.2
  - @nl-rvo/react-form-text-input@1.0.3
  - @nl-rvo/react-form-textarea@1.0.2
  - @nl-rvo/css-form-field@1.8.1

## 1.0.2

### Patch Changes

- 6ba10cb: Update package.json with a public field
- Updated dependencies [6ba10cb]
  - @nl-rvo/react-expandable-content@1.0.1
  - @nl-rvo/react-form-checkbox@1.0.1
  - @nl-rvo/react-form-checkbox-group@1.0.1
  - @nl-rvo/react-form-feedback@1.0.1
  - @nl-rvo/react-form-file-input@1.0.2
  - @nl-rvo/react-form-radio-button@1.0.1
  - @nl-rvo/react-form-radio-button-group@1.0.1
  - @nl-rvo/react-form-select@1.0.1
  - @nl-rvo/react-form-text-input@1.0.2
  - @nl-rvo/react-form-textarea@1.0.1

## 1.0.1

### Patch Changes

- @nl-rvo/react-form-file-input@1.0.1
  - @nl-rvo/react-form-text-input@1.0.1

## 1.0.0

### Major Changes

- b1b55a0: First version of this React Component

### Patch Changes

- Updated dependencies [b1b55a0]
- Updated dependencies [b1b55a0]
  - @nl-rvo/react-expandable-content@1.0.0
  - @nl-rvo/react-form-checkbox@1.0.0
  - @nl-rvo/react-form-checkbox-group@1.0.0
  - @nl-rvo/react-form-feedback@1.0.0
  - @nl-rvo/react-form-file-input@1.0.0
  - @nl-rvo/react-form-radio-button@1.0.0
  - @nl-rvo/react-form-radio-button-group@1.0.0
  - @nl-rvo/react-form-select@1.0.0
  - @nl-rvo/react-form-text-input@1.0.0
  - @nl-rvo/react-form-textarea@1.0.0
  - @nl-rvo/css-form-field@1.8.0
