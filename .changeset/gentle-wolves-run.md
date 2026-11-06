---
"@nl-rvo/css-form-radio-button": patch
"@nl-rvo/css-form-checkbox": patch
"@nl-rvo/component-library-css": patch
"@nl-rvo/component-library-react": patch
---

fix(radio-button, checkbox): show pointer cursor on label

Apply `cursor: pointer` (via `--utrecht-action-activate-cursor`) to the label wrapper of radio button and checkbox, matching the Utrecht Design System convention. Apply `cursor: not-allowed` on disabled state.
