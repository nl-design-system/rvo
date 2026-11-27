---
"@nl-rvo/css-alert": patch
"@nl-rvo/design-tokens": patch
"@nl-rvo/component-library-css": patch
"@nl-rvo/component-library-react": patch
---

style(alert): cap the content of an alert at 608px and centre it

On a wide screen the lines of text in an alert became too long to read. The icon, text and close button are now centred as one group with a maximum width of 608px, from the new token `--rvo-alert-container-max-inline-size`. The background of the alert still spans the full width, and the `maxWidth` property of the component still sets a different width.
