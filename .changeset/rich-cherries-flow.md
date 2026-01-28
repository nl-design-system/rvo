---
"@nl-rvo/css-tabs": major
---

### New

- Refactored Tabs to an `items`-based API with explicit panel content.
- Added full WAI-ARIA keyboard support (roving tabindex, Home/End, arrows, optional `activationMode="manual"`).
- Added `before` / `after` slots for tab items (icons, badges, counters).
- Added `size` variants (`sm`/`md`/`lg`) and token-friendly styling using CSS custom properties + logical properties.

### Deprecated / Breaking

- Deprecated legacy `tabs` prop and `TabItem` composition API (fallback still supported temporarily).
- Tabs should now be defined via `items`; panels are required per item.
