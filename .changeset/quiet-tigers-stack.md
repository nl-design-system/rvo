---
"@nl-rvo/css-tabs": patch
"@nl-rvo/component-library-css": patch
"@nl-rvo/component-library-react": patch
"@nl-rvo/design-tokens": patch
---

refactor(tabs): use component tokens for sizes and remove var fallbacks

The tabs SCSS referenced common tokens directly for the sm, md and lg sizes and used invalid fallback values in `var()`. Added the component tokens `--rvo-tabs-sm-*`, `--rvo-tabs-md-*` and `--rvo-tabs-lg-*` for font size and gap, which reference the common tokens, and removed all fallbacks. Visual output is unchanged.
