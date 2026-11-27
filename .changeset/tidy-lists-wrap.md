---
"@nl-rvo/css-ordered-unordered-list": patch
"@nl-rvo/component-library-css": patch
"@nl-rvo/component-library-react": patch
---

fix(list): keep inline content in an icon list item together

A list item of an unordered list with an icon (`rvo-ul--icon`) was a flex container, so text next to an inline element such as a link was split into separate columns. The list item is now a normal list item with the icon positioned in the padding, so mixed text and inline elements stay in one piece and long lines wrap under the text instead of under the icon. The icon looks the same as before.
