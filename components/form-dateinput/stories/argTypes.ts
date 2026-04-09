/**
 * Storybook-only argTypes copied from React component source.
 */
export const argTypes = {
  id: { control: 'text' },
  defaultValue: {
    control: 'text',
    description: 'Date value in "hh:mm:ss" format',
  },
  disabled: {
    control: 'boolean',
  },
  focus: {
    control: 'boolean',
  },
  invalid: {
    control: 'boolean',
  },
  readOnly: {
    control: 'boolean',
  },
  required: {
    control: 'boolean',
  },

  min: {
    control: 'text',
    description: 'Date value in "hh:mm:ss" format',
  },
  max: {
    control: 'text',
    description: 'Date value in "hh:mm:ss" format',
  },
  step: {
    control: 'number',
  },
  prefix: {
    control: 'text',
  },
  suffix: {
    control: 'text',
  },
  size: {
    options: ['sm', 'md', 'lg', 'max'],
    control: { type: 'radio' },
  },
  value: {
    control: 'text',
    description: 'Date value in "hh:mm:ss" format',
  },
  onFocus: {
    table: {
      disable: true,
    },
  },
  onBlur: {
    table: {
      disable: true,
    },
  },
  onChange: {
    table: {
      disable: true,
    },
  },
  onClick: {
    table: {
      disable: true,
    },
  },
  onInput: {
    table: {
      disable: true,
    },
  },
  onInvalid: {
    table: {
      disable: true,
    },
  },
};
