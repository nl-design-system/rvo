---
"@nl-rvo/css-logo": patch
"@nl-rvo/react-logo": patch
"@nl-rvo/component-library-css": patch
"@nl-rvo/component-library-react": patch
---

fix(logo): use rvo-link states for the logo title link

The logo title link no longer draws a large double outline around the whole logo on focus. The title is now a regular `rvo-link` (lintblauw), so it shares the focus state of every other link. Font weight stays the same in every state, there is no underline on hover and no background on focus. The whole logo stays clickable through the existing overlay.
