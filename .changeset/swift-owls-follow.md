---
"@nl-rvo/css-progress-tracker": patch
"@nl-rvo/react-progress-tracker": patch
"@nl-rvo/component-library-css": patch
"@nl-rvo/component-library-react": patch
---

fix(progress-tracker): use the link component states for step links

The step links of the progress tracker overrode the underline with a custom `text-decoration` rule, which reset the underline thickness on hover and focus. The step links now use the `noUnderline` option of the link component, so hover and focus look the same as the link component: an underline of 2px on hover and 4px on focus. The links still have no underline in the rest state.
