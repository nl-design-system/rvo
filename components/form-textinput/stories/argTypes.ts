/**
 * Storybook-only argTypes copied from React component source.
 */
export const argTypes = {
  autoFocus: {
    control: 'boolean',
  },
  id: { control: 'text' },
  type: {
    options: ['text', 'password', 'email', 'tel', 'url', 'search', 'number', 'date', 'time', 'datetime-local'],
    control: { type: 'select' },
  },
  defaultValue: {
    control: 'text',
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
  placeholder: {
    control: 'text',
  },
  value: {
    control: 'text',
  },
  validation: { options: ['none', 'currency'], control: { type: 'radio' } },
  prefix: {
    control: 'text',
  },
  suffix: {
    control: 'text',
  },
  size: {
    options: ['xs', 'sm', 'md', 'lg', 'max'],
    control: { type: 'select' },
  },
  maxLength: {
    control: 'number',
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
