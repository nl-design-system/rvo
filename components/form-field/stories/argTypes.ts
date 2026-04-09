/**
 * Storybook-only argTypes for form-field.
 */
export const argTypes = {
  fieldId: {
    control: 'text',
  },
  label: {
    control: 'text',
  },
  labelSize: {
    options: ['sm', 'md'],
    control: { type: 'radio' },
  },
  labelType: {
    options: ['default', 'optional', 'required'],
    control: { type: 'select' },
  },
  helperText: { control: 'text' },
  helperTextId: { control: 'text' },
  expandableHelperText: { control: 'boolean' },
  expandableHelperTextTitle: { control: 'text' },
  warningText: { control: 'text' },
  errorText: { control: 'text' },
  children: {
    table: {
      disable: true,
    },
  },
};
