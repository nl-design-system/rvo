# `@nl-rvo/css-form-textinput`

## 1.6.0

### Minor Changes

- 5442d67: Removed third party component imports and updated CSS to be inline with the original designs

## 1.5.0

### Minor Changes

- 70cc0a0: Replace utrecht-textbox height and width:

  - Replaced fixed height with --utrecht-pointer-target-min-size variable.
  - Removed hardcoded width definitions and replace it with the variable --utrecht-textbox-max-inline-size.

### Patch Changes

- 6c8b7fb: mobile menu changes

## 1.4.0

### Minor Changes

- 895c4d9: Add max-width 100% to default utrecht-textbox

## 1.3.1

### Patch Changes

- d03ae36: autocomplete css fix and added input classname prop

## 1.3.0

### Minor Changes

- fc4fd08: allow autoFocus prop to be forwarded to TextInput

### Patch Changes

- 78ca3b4: allow text- and date-input component to handle controlled and uncontrolled scenarios

## 1.2.2

### Patch Changes

- 4bcd28e: Change height of input and select fields from 45px to 48px

## 1.2.1

### Patch Changes

- 7777c3b: Added native input types

## 1.2.0

### Minor Changes

- 0cdf4eb: Remove utrecht-components-css reference and include utrecht css per component when needed

## 1.1.0

### Minor Changes

- c76d2fc: Split text/textarea input components into a separate text input component and textarea component

## 1.0.1

### Patch Changes

- c029d6a: Fixed callback events (eg onChange, onFocus) for field components

## 1.0.0

### Major Changes

- daa0537: Create npm package for each component.

## Pre-releases

_@nl-rvo/component-library-css@1.0.0-alpha.288_:
Added xs size option (`utrecht-textbox--xs`)

_@nl-rvo/component-library-css@1.0.0-alpha.238_:
Added max length + remaining characters indicator

_@nl-rvo/component-library-css@1.0.0-alpha.17_:
Added component
