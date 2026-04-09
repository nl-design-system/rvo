/**
 * Storybook-only argTypes copied from React component source.
 */
export const argTypes = {
  text: { control: 'text' },
  type: {
    options: ['warning', 'error'],
    control: { type: 'radio' },
  },
  children: {
    table: {
      disable: true,
    },
  },
};
