---
"@nl-rvo/component-library-react": patch
"@nl-rvo/react-form-feedback": patch
---

fix(form-feedback): use correct icon color for error state

The error icon was always rendered with the warning class (`rvo-status-icon-waarschuwing`), causing it to appear yellow. Removed the hardcoded className so StatusIcon applies `rvo-status-icon-foutmelding` automatically based on its type prop, rendering the icon in red as intended.
