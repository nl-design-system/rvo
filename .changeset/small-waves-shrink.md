---
"@nl-rvo/component-library-css": patch
"@nl-rvo/component-library-react": patch
"@nl-rvo/css-button": patch
"@nl-rvo/css-link": patch
"@nl-rvo/design-tokens": patch
---

fix(button, link): reduce icon-text gap from 12px to 8px

The gap between icon and adjacent text in the button and link components has been reduced from `--rvo-space-sm` (12px) to `--rvo-space-xs` (8px). This applies to all button variants with icons and to link elements using `.rvo-link__text` or `.rvo-link--with-icon`.
