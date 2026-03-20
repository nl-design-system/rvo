/**
 * Storybook-only argTypes copied from React component source.
 */
export const argTypes = {
  activeTab: {
    control: 'number',
  },
  tabs: {
    type: {
      name: 'array',
      required: true,
    },
  },
  OnChange: {
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
