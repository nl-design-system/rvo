---
"@nl-rvo/css-button": major
---

Removed third party Button Component to use own button setup and updated clasnames.
Removed the following parameters which where used through Storybook or no longer required:

- active
- busy
- focus
- focusVisible
- hover
- alignToRightInGroup

Using new classname for button: `rvo-button` instead of `utrecht-button`. All other class names using the previous classnames have also been updated with the classname prefix.
Removed allButtons export from Component, as this is only used in Storybook Stories.

Style Changes:
No direct changes in the display of the Compnent, but the naming convension of the Component has been updated to use `.rvo-button` as prefix, instead of `.utrecht-button`.
