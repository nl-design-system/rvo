/**
 * Storybook-only argTypes copied from React component source.
 */
export const argTypes = {
  size: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  content: {
    control: 'text',
  },
  centered: {
    control: 'boolean',
  },
  inlinePadding: {
    options: ['none', 'sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  children: {
    table: {
      disable: true,
    },
  },
};
