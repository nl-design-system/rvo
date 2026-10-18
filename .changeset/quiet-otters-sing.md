---
"@nl-rvo/css-form-textarea": patch
"@nl-rvo/component-library-react": patch
---

Align textarea styling with textinput

- Switch textarea to render `utrecht-textarea` classes so it inherits padding, font-family, font-size, color, and border tokens from the utrecht base + `--utrecht-form-control-*` tokens.
- Focus and invalid-focus states now match textinput exactly (outline color/width/style + `--rvo-textbox-outline-offset`, `--rvo-textbox-invalid-focus-*`).
- Widths use `--utrecht-textarea-max-inline-size` (`--rvo-textbox-{xs,sm,md,lg}-width`) instead of hardcoded `inline-size`.
- Remaining-chars span renamed from `rvo-textarea__remaining-chars` to `utrecht-textarea-remaining-chars` to align with textinput.
