/**
 * Storybook-only argTypes copied from React component source.
 */
export const argTypes = {
  type: {
    options: ['centered-dialog', 'inset-inline-start', 'inset-inline-end'],
    control: { type: 'radio' },
  },
  isModal: {
    control: 'boolean',
  },
  dialogSize: {
    options: ['sm', 'md', 'lg', 'xl'],
    control: { type: 'radio' },
  },
  backgroundColor: {
    options: ['wit', 'grijs-200'],
    control: { type: 'radio' },
  },
  children: {
    table: {
      disable: true,
    },
  },
  actionGroup: {
    table: {
      disable: true,
    },
  },
  content: {
    control: 'text',
  },
  isOpen: {
    control: 'boolean',
  },
  onClose: {
    action: 'onClose',
  },
  className: {
    control: 'text',
  },
  ariaLabel: {
    control: 'text',
  },
};
