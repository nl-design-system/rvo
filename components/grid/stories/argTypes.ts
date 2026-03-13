/**
 * Storybook-only argTypes copied from React component source.
 */
export const argTypes = {
  gap: {
    options: ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
    control: { type: 'radio' },
  },
  columns: {
    options: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'],
    control: { type: 'radio' },
  },
  division: {
    control: 'text',
    placeholder: '2fr 1fr',
  },
  marginBlockEnd: {
    options: ['none', '3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
    control: { type: 'radio' },
  },
  children: {
    table: {
      disable: true,
    },
  },
};
