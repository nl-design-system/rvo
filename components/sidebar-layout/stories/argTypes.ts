/**
 * Storybook-only argTypes copied from React component source.
 */
export const argTypes = {
  maxWidthLayoutSize: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  sidebarPosition: {
    options: ['left', 'right'],
    control: { type: 'radio' },
  },
  sidebarBackgroundColor: {
    control: 'boolean',
  },
  sidebarContent: {
    control: 'text',
  },
  content: {
    control: 'text',
  },

  children: {
    table: {
      disable: true,
    },
  },
};
