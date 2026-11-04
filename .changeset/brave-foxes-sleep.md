---
"@nl-rvo/css-button": patch
---

fix(button): replace focus ring with link-style underline for subtle and tertiary variants

No more blue outline on focus; instead black text color with a 3px underline at 2px offset, matching the link focus style. The underline is also preserved when hovering over a focused button.
