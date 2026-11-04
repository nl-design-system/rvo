---
"@nl-rvo/css-button": patch
"@nl-rvo/css-link": patch
---

fix(button, link): replace focus ring with underline, align hover/focus styles

All button variants now show a 4px underline on focus instead of the Utrecht focus ring. Solid variants (primary, secondary, quaternary, warning) use their existing text color for the underline. Subtle, tertiary, and warning-subtle keep their base colors (donkerblauw, hemelblauw, rood) on focus and when hovering a focused button. Hover also adds a 2px underline for all variants without changing background or text color.

The link component now uses a text-underline-offset of 25% at all states (base, hover, active, focus). This ensures the underline remains visible even with descender-heavy text — without sufficient offset the line was hidden behind characters like g, j, and y.
