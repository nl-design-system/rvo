---
"@nl-rvo/component-library-css": patch
---

Fix unresolvable `@import` references in the CSS bundle. Removed the import of the no longer existing `css-form-field-label` package (its styles are part of `css-form-field`), corrected the package names of `css-form-file-input`, `css-form-text-input` and the utility packages, and added `css-skeleton` and `css-tag` as dependencies so they are installed together with the component library.
