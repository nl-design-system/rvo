---
"@nl-rvo/css-logo": patch
"@nl-rvo/component-library-css": patch
"@nl-rvo/component-library-react": patch
---

fix(logo): keep the logo title link in its rest state after a mouse click and show a 2px underline on keyboard focus plus hover

After a mouse click the title link kept `:focus` and showed the thick black focus underline. It now looks like the rest state again. When the link has keyboard focus and is hovered, the underline stays visible at the hover thickness instead of disappearing.
