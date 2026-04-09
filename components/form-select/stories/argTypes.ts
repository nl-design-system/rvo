export const argTypes = {
  id: { control: 'text' },
  disabled: {
    control: 'boolean',
  },
  focus: {
    control: 'boolean',
  },
  invalid: {
    control: 'boolean',
  },
  required: {
    control: 'boolean',
  },
  options: {
    type: {
      name: 'array',
      required: true,
    },
  },
  size: {
    options: ['xs', 'sm', 'md', 'lg', 'max'],
    control: { type: 'select' },
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
  onInvalid: {
    table: {
      disable: true,
    },
  },
  defaultValue: { control: 'text' },
  value: { control: 'text' },
};
