---
"@nl-rvo/react-table": patch
"@nl-rvo/css-table": patch
"@nl-rvo/component-library-css": patch
"@nl-rvo/component-library-react": patch
---

a11y(table): announce the sort state to screen readers

Every column header always had `aria-sort="descending"` unless the column was sorted ascending, so screen readers such as VoiceOver announced a wrong state. Only the currently sorted column now has `aria-sort` (`ascending` or `descending`), other columns have none. Columns that are not sortable no longer render a button, and the sort icons are hidden from assistive technology.
