---
"@nl-rvo/component-library-react": patch
---

Fix icon size regression in `MenuBarItem`: with `size="lg"`, the icon was incorrectly rendered at 16px (md) instead of 18px (lg), because `Link`'s `iconSize` prop did not support `lg`. `iconSize` now also accepts `lg`.
