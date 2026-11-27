---
"@nl-rvo/css-menubar": minor
"@nl-rvo/react-menubar": minor
"@nl-rvo/design-tokens": minor
"@nl-rvo/component-library-css": minor
"@nl-rvo/component-library-react": minor
---

feat(menubar): bring back the active state of a menu item

The menu item for the current page had no visible state since a fix in May 2025, so users could not see where they were. A menu item now accepts `active`. It gets an underline of 1px that becomes 2px on hover and focus, and the link gets `aria-current="page"` so screen readers announce it too. The hover and focus thickness now come from component tokens and the unused `topnav.item.active.font-weight` token is replaced by `topnav.item.active.text-decoration` and `topnav.item.active.text-decoration-thickness`.
