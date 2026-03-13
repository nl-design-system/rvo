/**
 * Storybook-only argTypes copied from React component source.
 */
export const argTypes = {
  kind: {
    options: ['info', 'warning', 'error', 'success'],
    control: { type: 'radio' },
  },
  heading: {
    control: 'text',
  },
  content: {
    control: 'text',
  },
  closable: {
    control: 'boolean',
  },
  padding: {
    options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    control: { type: 'radio' },
  },
  children: {
    table: {
      disable: true,
    },
  },
  onClose: {
    table: {
      disable: true,
    },
  },
};
