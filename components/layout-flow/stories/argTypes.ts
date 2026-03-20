/**
 * Storybook-only argTypes copied from React component source.
 */
export const argTypes = {
  gap: {
    options: ['0', '3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
    control: { type: 'radio' },
  },
  row: {
    control: 'boolean',
  },
  wrap: {
    control: 'boolean',
  },
  alignItems: {
    options: ['', 'start', 'center', 'end'],
    control: { type: 'select' },
  },
  alignContent: {
    options: ['', 'start', 'center', 'end', 'space-between'],
    control: { type: 'select' },
  },
  justifyItems: {
    options: ['', 'start', 'center', 'end'],
    control: { type: 'select' },
  },
  justifyContent: {
    options: ['', 'start', 'center', 'end', 'space-between'],
    control: { type: 'select' },
  },
  children: {
    table: {
      disable: true,
    },
  },
};
