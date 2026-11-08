---
"@nl-rvo/component-library-css": minor
"@nl-rvo/component-library-react": minor
"@nl-rvo/css-form-fieldset": minor
"@nl-rvo/design-tokens": patch
"@nl-rvo/react-form-field": patch
"@nl-rvo/react-form-fieldset": minor
"@nl-rvo/utility-border": minor
---

feat(form-fieldset): clean up fieldset styling and add border-radius utilities

Removes background colour, padding, and border radius from `rvo-form-fieldset`.
Those visual responsibilities now belong to the wrapping element, composable via
existing utilities (`rvo-bg--grijs-100`, `rvo-padding--xl`, `rvo-layout-column`,
`rvo-layout-gap--xl`, `rvo-border-start-end-radius--2xl`). Also resets browser
defaults (`min-inline-size`, `padding`, `margin`) and adds a `legend-gap` token
to control the spacing between the legend and the first field independently of the
field-to-field gap.

Adds `rvo-border-radius--{sm|md|lg|xl|2xl}` for uniform border radius and
`rvo-border-{start-start|start-end|end-start|end-end}-radius--{size}` for
per-corner logical-property variants to `utility-border`.

Also fixes a bug where the form-field description element was always rendered as
an empty `<div>` even when no `helperText` or `expandableHelperText` was provided.
