/**
 * Storybook-only argTypes copied from React component source.
 */
export const argTypes = {
  type: {
    options: ['unordered', 'ordered'],
    control: { type: 'radio' },
  },
  items: {
    type: {
      name: 'array',
      required: false,
    },
  },
  bulletType: {
    if: { arg: 'type', eq: 'unordered' },
    type: {
      options: ['disc', 'none', 'icon'],
      control: { type: 'radio' },
    },
  },
  bulletIcon: {
    if: { arg: 'bulletType', eq: 'icon' },
    type: {
      options: ['option-1', 'option-2', 'option-3'],
      control: { type: 'radio' },
    },
  },
  noMargin: {
    control: 'boolean',
  },
  noPadding: {
    control: 'boolean',
  },
  children: {
    table: {
      disable: true,
    },
  },
};
