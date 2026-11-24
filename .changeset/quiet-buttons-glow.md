---
"@nl-rvo/design-tokens": patch
"@nl-rvo/component-library-css": patch
"@nl-rvo/component-library-react": patch
---

style(button): give subtle buttons a white background and rounded corners

Subtle and warning-subtle buttons had no background, so their rounded corners were not visible and they lost contrast on coloured backgrounds. They now have a white background in every state. The secondary button also keeps its white background on focus instead of turning transparent.
