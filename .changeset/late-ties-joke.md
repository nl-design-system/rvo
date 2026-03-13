---
"@nl-rvo/component-library-react": patch
"@nl-rvo/storybook": minor
---

Refactor Storybook argTypes location

Move all argTypes from `component-library-react` to
`components/<component-name>/stories/argtypes.ts` so each component
maintains its own Storybook argTypes configuration.
