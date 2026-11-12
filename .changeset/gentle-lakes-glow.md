---
"@nl-rvo/css-link": patch
"@nl-rvo/component-library-css": patch
"@nl-rvo/component-library-react": patch
---

fix(link): restore underline on hover and focus for links inside block containers

Since the architecture refactor `.rvo-link__text` used `display: inline-flex`. An atomic inline box does not inherit `text-decoration` from its parent, so links whose anchor is `display: block` (for example the card title link with `fullCardLink`) lost their underline on hover and focus. The text wrapper is a block-level flex container again, as it was before the refactor.
