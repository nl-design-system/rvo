/**
 * Storybook-only argTypes copied from React component source.
 */
export const argTypes = {
  items: {
    control: 'object',
  },
  size: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  children: {
    table: {
      disable: true,
    },
  },
};
