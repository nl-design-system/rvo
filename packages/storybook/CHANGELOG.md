# @nl-rvo/storybook

## 2.2.0

### Minor Changes

- c49b651: Refactor Storybook argTypes location

  Move all argTypes from `component-library-react` to
  `components/<component-name>/stories/argtypes.ts` so each component
  maintains its own Storybook argTypes configuration.

### Patch Changes

- 2ed4a39: Version bump to 10.3.3

## 2.1.0

### Minor Changes

- fa36e07: - Version bump storybook with all related packages to 10.2.14
  - Add missing storybook-addon-status addon to show the component status like "BETA" or "PRODUCTION"

### Patch Changes

- 781d278: Added viewport fix for firefox

## 2.0.0

### Major Changes

- 11eb258: update storybook from v7 to v10.2.7

## 1.2.0

### Minor Changes

- 70cc0a0: Update `react` and `react-dom` to `18.3.1`
- ebe26f1: Introduce a new `image` component.

### Patch Changes

- 6c8b7fb: mobile menu changes
- 70cc0a0: Bump all `@storybook/` dependencies.

## 1.1.0

### Minor Changes

- da7c279: Bump Storybook version to 7.6.20.
- da7c279: Add utilities pages and remove helper pages for consistency.

### Patch Changes

- 064091a: Fix some markdown error for alert and button component.
  Updated @whitespace/storybook-addon-html to the latest version to remove warning messages during the build process.
  Added remark-gfm dependency to enable rendering of tables inside Markdown.

## 1.0.0

### Minor Changes

- 0cdf4eb: Remove utrecht-components-css reference and include utrecht css per component when needed
