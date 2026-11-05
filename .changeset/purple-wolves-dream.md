---
"@nl-rvo/component-library-react": patch
"@nl-rvo/react-form-field": patch
---

fix(form-field): associate label with form control via htmlFor

The label element had `id={id}` instead of `htmlFor={id}`, which meant clicking
the label did not activate the associated form control (e.g. checkbox, text input).
Also fixes a mismatch where `aria-labelledby` referenced `${id}-label` but the
label's id was `${id}`.
