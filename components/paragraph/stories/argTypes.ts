/**
 * Storybook-only argTypes copied from React component source.
 */
export const argTypes = {
  content: {
    control: 'text',
  },
  color: {
    control: { type: 'select' },
    options: ['lintblauw', 'wit', 'zwart', 'grijs-500', 'grijs-900'],
  },
  size: {
    control: { type: 'select' },
    options: ['sm', 'md', 'lg'],
  },
  noSpacing: {
    control: 'boolean',
  },
  children: {
    table: {
      disable: true,
    },
  },
};
