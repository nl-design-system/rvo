---
"@nl-rvo/css-page-number-navigation": patch
"@nl-rvo/component-library-css": patch
"@nl-rvo/component-library-react": patch
---

a11y(page-number-navigation): make focused link visible

It was unclear which item had keyboard focus in the page number navigation, because the links had no focus indicator. Links are now underlined on keyboard focus, like on hover, with the focus thickness of the link component.
