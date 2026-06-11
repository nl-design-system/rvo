---
"@nl-rvo/css-button": patch
---

Clean up button tokens and replace icon margin with gap token. Icon spacing is now handled by a single `gap` on the base element; duplicate `margin-inline-end`/`margin-inline-start` rules on icon-before/after variants have been removed.
