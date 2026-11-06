---
"@nl-rvo/component-library-css": patch
"@nl-rvo/component-library-react": patch
"@nl-rvo/css-form-checkbox": patch
"@nl-rvo/css-form-radio-button": patch
"@nl-rvo/react-form-field": patch
---

fix(form-field, radio-button, checkbox): make labels fully clickable and show pointer cursor

The form-field label had `id={id}` instead of `htmlFor={id}`, which meant clicking
the label did not activate the associated form control (e.g. checkbox, text input).
Also fixes a mismatch where `aria-labelledby` referenced `${id}-label` but the
label's id was `${id}`. Radio button and checkbox labels now show a pointer cursor
on hover (via `--utrecht-action-activate-cursor`) and a not-allowed cursor when disabled.
