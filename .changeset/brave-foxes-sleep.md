---
"@nl-rvo/css-button": patch
---

fix(button): replace focus ring with link-style underline for all button variants

All button variants now show a 3px underline at 2px offset on focus instead of the Utrecht focus ring. Solid variants (primary, secondary, quaternary, warning) use their existing text color for the underline. Subtle, tertiary, and warning-subtle keep their base colors (donkerblauw, hemelblauw, rood) on focus and when hovering a focused button.
