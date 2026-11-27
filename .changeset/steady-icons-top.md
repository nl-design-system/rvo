---
"@nl-rvo/css-form-feedback": patch
"@nl-rvo/design-tokens": patch
"@nl-rvo/component-library-css": patch
"@nl-rvo/component-library-react": patch
---

fix(form-feedback): keep the icon at the top of a multi-line message

When a message in a form field ran over multiple lines, the icon was centred vertically next to the text. The icon now stays at the top, with a margin of 4px from the new token `--rvo-form-feedback-icon-margin-block-start`.
