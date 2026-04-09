/**
 * Storybook-only argTypes copied from React component source.
 */
export const argTypes = {
  invalid: { control: 'boolean' },
  options: {
    type: {
      name: 'array',
      required: true,
    },
  },
  onChange: {
    table: {
      disable: true,
    },
  },
  children: {
    table: {
      disable: true,
    },
  },
};
