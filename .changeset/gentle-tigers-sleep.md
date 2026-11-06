---
"@nl-rvo/component-library-css": minor
"@nl-rvo/component-library-react": minor
"@nl-rvo/css-form-fieldset": minor
"@nl-rvo/design-tokens": patch
"@nl-rvo/react-form-field": patch
"@nl-rvo/react-form-fieldset": minor
"@nl-rvo/utility-border": minor
---

feat(utility-border): add border-radius utility classes

Adds `rvo-border-radius--{sm|md|lg|xl|2xl}` for uniform border radius and
`rvo-border-{start-start|start-end|end-start|end-end}-radius--{size}` for
per-corner logical-property variants.

Also removes background colour, padding, and border radius from `rvo-form-fieldset`.
Those visual responsibilities now belong to the wrapping element, composable via
existing utilities (`rvo-bg--grijs-100`, `rvo-padding--xl`, `rvo-layout-column`,
`rvo-layout-gap--xl`, `rvo-border-start-end-radius--2xl`).

Also fixes a bug where the form-field description element was always rendered as
an empty `<div>` even when no `helperText` or `expandableHelperText` was provided.
