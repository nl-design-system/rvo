/**
 * Storybook-only argTypes copied from React component source.
 */
export const argTypes = {
  type: {
    control: { type: 'select' },
    options: ['info', 'bevestiging', 'foutmelding', 'waarschuwing'],
  },
  size: {
    options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    control: { type: 'radio' },
  },
};
