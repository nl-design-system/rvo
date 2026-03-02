# @nl-rvo/component-library-react

## 6.2.0

### Minor Changes

- 8f77b41: New option for image (overlay) lines.
- a8c9e6f: Updated Hero component with the support of the kind and showLine parameter
- 8b8710c: Update page number navigation: always show 5 items from page 1 and 5 items before the last page (with ellipses between ranges when needed).

### Patch Changes

- 8e4ad8b: Update Button component with type parameter
- 3b31082: Updated all flex alignment and justify to prefix with flex-
- c780f1e: Aligned TextArea character counter to the left

## 6.1.0

### Minor Changes

- fac57b8: Make image required and enable the props: fetchPriority, width, height, loading, sizes and srcSet.
- 24190d1: Add size for form-select and form-field-select.

### Patch Changes

- f606906: Checkbox filters have a new parameter to initialize closed if needed f.e. mobile users
- 961dc70: Update placeholder text.

## 6.0.0

### Major Changes

- 5442d67: Added Support for React 19.

  Removed third party component imports from the following Components:

  - Action Group
  - Button
  - Datalist
  - Footer
  - Form Feedback
  - Form Field
  - Form Fieldset
  - Form Textarea
  - Form Textinput

### Minor Changes

- ebc334a: Version bump for babel dependencies
- 669bc7f: Modify icon names for button component, replace spaces for hyphens.
- 00a912a: Remove content option for hero component.

### Patch Changes

- 9b2eeb1: ROOS-282: adds end margin to the grid container to meet current designs

## 5.10.2

### Patch Changes

- 77773e1: ROOS-269: fix dialog content height and made dialog close label configurable

## 5.10.1

### Patch Changes

- 5f0f46a: Card Component padding default is changes from none to md

## 5.10.0

### Minor Changes

- 70cc0a0: Update `react` and `react-dom` to `18.3.1`
- 99b3741: Replaced the Heading elements in the Footer with span elements and updated rvo_footer\_\_column-title styling
- ebe26f1: Introduce a new `image` component.
- 70cc0a0: Update dependencies `@utrecht/component-library-css@3.0.1-alpha.22` and `@utrecht/component-library-react@3.0.1-alpha.22` to stable versions `8.0.0` and `4.2.0`.
- 70cc0a0: Replace utrecht-textbox height and width:

  - Replaced fixed height with --utrecht-pointer-target-min-size variable.
  - Removed hardcoded width definitions and replace it with the variable --utrecht-textbox-max-inline-size.

### Patch Changes

- 70cc0a0: Patch `next` version to `14.2.33`
- a5bfa65: Added padding to Checkbox Filter input field so the text doesn't overlap the chevron
- 6c8b7fb: mobile menu changes
- 26edcb3: ROOS-254: Forwards HTMLAttributes to root element for components that did not already implement this
- 70cc0a0: Remove unused `@utrecht/components` dependency.
- ebe26f1: Update autoprefixer and sass-embedded.
- 0b89c27: Removed placeholder field from Checkbox Filter Component

## 5.9.0

### Minor Changes

- 1ad7499: Align list item markers (ul li) to the top when list content spans multiple lines.
- cde2fed: Update Label component with new parameters and updated required text
- 1ad7499: Introduce new css variables to modify ul-icon image and before margin for more flexibility.

## 5.8.0

### Minor Changes

- dae7f09: design token and css name changes from logoblauw to lintblauw

## 5.7.1

### Patch Changes

- 05af765: Update css rollup

## 5.7.0

### Minor Changes

- 7e1657d: Improve chevron position for accordion.
- f8b37b0: Improve breadcrumb alignment by adding flex wrap and introduce new CSS variables for better customization.
- 15586ac: Add missing form-textarea component to support `utrecht-textarea` class
- 064091a: Rename position-right and -left to inset-inline-end and -start.
- 6342755: Heading Component code cleaned up. Removed build-in options for icons and link. Rvo-icons are still supported through styling
- e6f04fe: Added `grijs-900` as a color option for the `paragraph` component.
  Introduced new CSS variables (`--rvo-paragraph-color`, etc.) for improved customization.
- c8632e5: Rename dialog drawer-right/left to position-right/left.
  Introduced new CSS variables (`--rvo-dialog-background`, etc.) for improved customization.
- da7c279: Add the utilities components to the themeProvide and removed the helper components.
- 540d0f8: Changed default card padding to 0.
  Introduced new CSS variables for cards to improve customization.
- ad25307: Remove text-shadow on active menubar\_\_links.

## 5.6.1

### Patch Changes

- d850ddd: border-collapse CSS fix in expandable-table component

## 5.6.0

### Minor Changes

- a0bc5a9: Paramater to make Expandable Content Icon optional and updated css
- 2127a46: improved link rendering and WCAG, added debounced filtering and custom filtering
- de17b9d: Added 48px option to sizes
- 8d7dddf: Table column headers are now buttons and be able to be read and interactived with through screenreaders
- bd606c5: Added 48px as an options for spacing
- 68464fd: Added a new Quote Component

### Patch Changes

- c3a7f35: Fixed typo in Quote component

## 5.5.0

### Minor Changes

- cf7f2bb: Change the color of the --utrecht-heading variable when the inverted mode is active.
- 895c4d9: Add max-width 100% to default utrecht-textbox
- 6e7620a: Add 'overflow-wrap: break-word' to table cells.
- 3725b5d: deleted the grey prop inline with WCAG rules
- 6f2b4c6: Add lichtblauw-150 as a new option for backgroundColor (card component)
- 9775a8c: Tag Styling update with different default color and updated component and scss files
- f12ce99: isPill property added to tag component

### Patch Changes

- 78a7fb2: add a bottom line when hovering on close button
- e905264: ROOS-140: Card no longer has a default title
- 23ea461: button css fixes

## 5.4.2

### Patch Changes

- e24ffcf: adjustmnent in ordered and unordered list component props
- d03ae36: autocomplete css fix and added input classname prop

## 5.4.1

### Patch Changes

- 9c2fbd9: Fixes relying on DOMParser to prevent hydration issues

## 5.4.0

### Minor Changes

- 6318a72: extended Card with headingProps, linksProps, layout and inlineImage to better meet design requirements

### Patch Changes

- 796b8b6: ROOS-87: fixes fullCardLink prop

## 5.3.0

### Minor Changes

- 31b847a: new component autocomplete

### Patch Changes

- 73efb89: Removed zero padding for first and last child menu items.
- b4affb0: Forwards className prop to Grid component
- 78ca3b4: allow text- and date-input component to handle controlled and uncontrolled scenarios
- a255197: Pagination renamed to Page Number Navigation and updated CSS
- a6541cb: Renamed Layout parameter to maxWidth for Alert Component
- f75e111: Added spacing between button icon and its content
- fec3bba: Updated Feedback components design tokens and CSS
- a9b161f: Added position relative to rov-checkbox\_\_input class

## 5.2.0

### Minor Changes

- a8cd259: Mobile menu code cleanup and splitting of menu items

### Patch Changes

- 9f3ff4d: pagination now has className prop and html atrributes props forwarded to the root element
- 6e5a78b: adds an inputFieldLabel prop for the text input field + fix UX where the user cannot remove client side filtering value because of missing text field

## 5.1.0

### Minor Changes

- a0061d6: Allow for client side navigation via LinkComponent prop on Link and Card and added CardExperimental compound component

### Patch Changes

- 88c844c: allow the content prop to contain react nodes instead of strings
- 5a08db9: derives checkbox state from specified options and using parent state as single source of thruth

## 5.0.1

### Patch Changes

- cd3906b: Revert rollup config

## 5.0.0

### Major Changes

- c95cf1b: CSS is now working when importing an React Component.

## 4.9.0

### Minor Changes

- 0cffc4f: New experimental expandable table component
- ca618f4: The fieldId prop is no longer mandatory and the for attribute is now derived from the id prop instead.

### Patch Changes

- aaef5c8: Layout property added to alert so you can showcase an alert as an full page alert

## 4.8.1

### Patch Changes

- 0157ba8: Text Area classes where not properly set in scss file

## 4.8.0

### Minor Changes

- d9727b9: Table columns now have a optional size field allowing for default set widths

### Patch Changes

- d9727b9: Added width 100% to layout types and update linked components using this class

## 4.7.3

### Patch Changes

- 8fcf59c: Added width 100% to layout types and update linked components using this class

## 4.7.2

### Patch Changes

- 22e4bed: Allign textarea remaining character to the right, instead of the left

## 4.7.1

### Patch Changes

- 20cbb12: fix menubar shifts and submenu placement when grid is turned off

## 4.7.0

### Minor Changes

- 4a66507: Nieuw component genaamd Skeleton loader

## 4.6.16

### Patch Changes

- 82d7db9: Added support to use img as a acceptable param for the hero image.

## 4.6.15

### Patch Changes

- 8ebb0f5: Hover on secondary menu items in footer resolved and remove grid display from secondary footer menu

## 4.6.14

### Patch Changes

- 061c377: Removed position relative from card with link indicator

## 4.6.13

### Patch Changes

- 72cde9a: Remove inline styling for table header

## 4.6.12

### Patch Changes

- 7a7e91a: Updated Footer component to display as a grid instead of flexbox. Added extra styling to make it usable on smaller screen devices

## 4.6.11

### Patch Changes

- 79d45ab: Unordered list icon has a min-width so it's always displayed over multiple lines

## 4.6.10

### Patch Changes

- 1b40bde: adjusted navigation and html structure

## 4.6.9

### Patch Changes

- c6acde0: Revert coding issue in checkbox

## 4.6.8

### Patch Changes

- 569401b: Checkbox checked cant be undefined

## 4.6.7

### Patch Changes

- 8b3276d: Removed value parameter from checkbox component

## 4.6.6

### Patch Changes

- 8ad586f: Fixed issue with full-card-link not applying proper styling

## 4.6.5

### Patch Changes

- 9585d9e: Removed value from checkbox interface to make the input field controlled

## 4.6.4

### Patch Changes

- d7b023d: Make Loader usuable

## 4.6.3

### Patch Changes

- f1acd87: changeset voor release van select

## 4.6.2

### Patch Changes

- 5b63cf3: changes background colour for submenu

## 4.6.1

### Patch Changes

- 950ab7e: update menubar and menubar mobile styling issues

## 4.6.0

### Minor Changes

- af62c22: Upgraded the Footer Component to support horizontal layout per column and the use of ReactNode as content

## 4.5.0

### Minor Changes

- 61b89bc: Updated MenuBar and MobileMenu to support SubMenus properly

## 4.4.10

### Patch Changes

- e64cd5a: Fixes for checkboxfilter and select

## 4.4.9

### Patch Changes

- 4411bea: Pass defaultValue parameter to select component

## 4.4.8

### Patch Changes

- 185af8a: Issues fixed with Checkbox Filter and Select field

## 4.4.7

### Patch Changes

- a0f95b0: Removed defaultValue from options and added value

## 4.4.6

### Patch Changes

- 2759ed6: Checkbox Group returns Id in currentSelection

## 4.4.5

### Patch Changes

- 0bc641f: Tag component now prioratizes the icon parameter instead of the type when displaying an icon

## 4.4.4

### Patch Changes

- 31d574f: Minor Issue with Checkbox Filter and correctly export it to react package

## 4.4.3

### Patch Changes

- 1f2d97b: Breadcrumd alignment set to baseline

## 4.4.2

### Patch Changes

- 4bcd28e: Change height of input and select fields from 45px to 48px

## 4.4.1

### Patch Changes

- 3840c9d: Updated styling issues for the accordion component
- defcc74: Counterbadge updated to implement design tokens

## 4.4.0

### Minor Changes

- 9fffd1e: Create a new component called called Checkbox Filter. Updated icon to support logoblauw color and form-checkbox-group to have a onChange parameter.

### Patch Changes

- 02380ff: Fixed issue with duplicate chevron and outbreaking inputfield

## 4.3.0

### Minor Changes

- 6284f7a: Create a new component called called Checkbox Filter. Updated icon to support logoblauw color and form-checkbox-group to have a onChange parameter.

## 4.2.1

### Patch Changes

- ba6a672: Fixed table header issues and design tokens updated

## 4.2.0

### Minor Changes

- 1dee453: Added a new componont to be used, the loader.

## 4.1.0

### Minor Changes

- 37945cc: Added new component: Counter Badge

## 4.0.1

### Patch Changes

- e0aff8b: All button types have a underscore added to the hover event

## 4.0.0

### Major Changes

- 6299e11: Added division property and --division variable to use instead of the layout prop

### Minor Changes

- 6299e11: Added option for 7-12 columns in Grid component

### Patch Changes

- 6299e11: Removed focus outline when selecting a Radio button
- 6299e11: Removed fixed height and added font size to FileInput component

## 3.0.0

### Major Changes

- a498e7d: Added division property and --division variable to use instead of the layout prop

### Minor Changes

- a498e7d: Added option for 7-12 columns in Grid component

### Patch Changes

- a498e7d: Removed focus outline when selecting a Radio button
- a498e7d: Removed fixed height and added font size to FileInput component

## 2.5.5

### Patch Changes

- 994e9a3: Removed hover underline from full card title link

## 2.5.4

### Patch Changes

- 103e6af: Fixed Dialog border and margin

## 2.5.3

### Patch Changes

- de80995: Moved remaining characters indicator in TextArea to the left
- de80995: Made centered content in max-width-layout optional

## 2.5.2

### Patch Changes

- 7c8114c: Allow for empty pay-off in Footer component

## 2.5.1

### Patch Changes

- 7777c3b: Added native input types

## 2.5.0

### Minor Changes

- 6c75ec9: Improved Table styling

## 2.4.3

### Patch Changes

- 07b0344: Added min-width to max-width-layout to ensure it fits correctly in other layout containers
- 1c0c2da: Made table description optional

## 2.4.2

### Patch Changes

- 8e0a35f: Made table description optional

## 2.4.1

### Patch Changes

- 6451d00: Fixed quaternary color for button

## 2.4.0

### Minor Changes

- 8dd0fe7: Added optional pay-off and secondary menu (first menu columns are now called primary-menu)

### Patch Changes

- 8dd0fe7: Added min-width to icon class to enforce its size

## 2.3.0

### Minor Changes

- c56b5ac: Used a Dialog component in mobile Menubar (so include dialog css when updating)

### Patch Changes

- c56b5ac: Removed title from Dialog component
- c56b5ac: Set default padding of Dialog to 2xl, and only flex content if there is an action group

## 2.2.3

### Patch Changes

- 8fccd6c: Set width of logo wrapper in Header component to 100%
- 8fccd6c: Fixed subitem rendering in mobile Menubar
- c419eb5: Fix link in Card component
- 8fccd6c: Fixed z-index for close button in mobile Menubar

## 2.2.2

### Patch Changes

- f966df8: Set width of logo wrapper in Header component to 100%
- f966df8: Fixed subitem rendering in mobile Menubar

## 2.2.1

### Patch Changes

- bcca9d4: Set width of logo wrapper in Header component to 100%

## 2.2.0

### Minor Changes

- 19e94e5: Added Dialog/modal component

### Patch Changes

- 19e94e5: Fix alignToRight className for Button component (when using it in a ActionGroup)

## 2.1.0

### Minor Changes

- 0cdf4eb: Remove utrecht-components-css reference and include utrecht css per component when needed

## 2.0.0

### Major Changes

- e86c11d: Fixed card/hero image src, fixed card image sizes, fixed text/date/time input sizes (xs, sm, md, lg, max), date input prefix+suffix props, fixed optional/required field label margin, added callback for Toggle

## 1.7.0

### Minor Changes

- aa230ad: Added paragraph component

### Patch Changes

- 3962dc6: Added 3xs gap to LayoutFlow
- 3962dc6: Fixed gap property and added 3xs gap to Grid

## 1.6.0

### Minor Changes

- 8d5d1a4: Added --none modifier to margin and padding helpers, included helpers in ThemeProvider (React package) by default

## 1.5.0

### Minor Changes

- 9b0300b: Added scrollable content component

## 1.4.1

### Patch Changes

- 0a14f60: Added Hero content box as a separate div and class (not h1)

## 1.4.0

### Minor Changes

- fc69881: Added min-height to Header, renamed ButtonGroup to ActionGroup, renamed ExpandableText to ExpandableContent, add aria label to current page in Pagination

## 1.3.0

### Minor Changes

- c76d2fc: Split text/textarea input components into a separate text input component and textarea component

## 1.2.3

### Patch Changes

- 4d9854a: Changed classnames for padding/margin helpers (--sm suffix instead of -sm)

## 1.2.2

### Patch Changes

- 1b33d50: Added custom margin/padding helpers
- 1b33d50: Added helpers for padding and margin

## 1.2.1

### Patch Changes

- b1c08bf: 5f65632: Added container queries to Grid component
  5f65632: Add support for children in Card component
  5f65632: Add support for React JSX in Card title prop
  5f65632: Made Footer columns and items props optional
  5f65632: Extended Header type with div html attributes
  5f65632: Extended Heading type with HTML heading attributes
  5f65632: Added support for React nodes in Item List items
  5f65632: Added HTML div attributes to LayoutFlow type
  5f65632: Made items and useIcons props in MenuBar optional
  5f65632: Made props like items and size in mobile MenuBar optional

## 1.2.0

### Minor Changes

- c029d6a: Renamed url to link in BreadcrumbItem
- c029d6a: Renamed size prop to gap in LayoutFlow
- c029d6a: Added DataListItem component to include in DataList

### Patch Changes

- c029d6a: Fixed callback events (eg onChange, onFocus) for field components

## 1.1.0

### Minor Changes

- 747cf25: Added ThemeProvider, fixed integration of Utrecht based components

## 1.0.0

### Major Changes

- edb1cab: Initial release of React components
