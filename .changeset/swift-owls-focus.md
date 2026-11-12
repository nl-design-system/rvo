---
"@nl-rvo/css-link": patch
"@nl-rvo/css-footer": patch
"@nl-rvo/css-alert": patch
"@nl-rvo/css-progress-tracker": patch
"@nl-rvo/component-library-css": patch
"@nl-rvo/component-library-react": patch
---

fix(link): show link focus styles on :focus-visible only

Link focus styles were applied on `:focus`, so they also appeared after a mouse click. They now follow `:focus-visible`, which keeps the clear focus indicator for keyboard users and drops it for pointer users. The hover exclusions in link, footer and alert and the focus underline in the progress tracker follow the same rule.
