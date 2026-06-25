import { iconNames } from '../../utils/iconUtils';
/**
 * Storybook-only argTypes copied from React component source.
 */
export const argTypes = {
  kind: {
    options: ['primary', 'secondary', 'tertiary', 'quaternary', 'subtle', 'warning-subtle', 'warning'],
    control: { type: 'radio' },
  },
  size: {
    options: ['xs', 'sm', 'md'],
    control: { type: 'radio' },
  },
  label: {
    control: 'text',
  },
  disabled: {
    control: 'boolean',
  },
  showIcon: {
    options: ['no', 'before', 'after'],
    control: { type: 'radio' },
  },
  icon: {
    control: { type: 'select' },
    options: iconNames,
  },
  iconAriaLabel: { control: 'text' },
  fullWidth: {
    control: 'boolean',
  },
};
