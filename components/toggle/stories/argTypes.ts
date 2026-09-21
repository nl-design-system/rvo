import { iconNames } from '../../utils/iconUtils';

/**
 * Storybook-only argTypes copied from React component source.
 */
export const argTypes = {
  content: {
    control: 'text',
  },
  showIcon: {
    options: ['no', 'before', 'after'],
    control: { type: 'radio' },
  },
  icon: {
    control: { type: 'select' },
    options: iconNames,
  },
  showHover: {
    control: 'boolean',
  },
  active: {
    control: 'boolean',
  },
  focus: {
    control: 'boolean',
  },
  link: {
    control: 'text',
  },
  linkTarget: {
    options: ['_blank', '_self', '_parent', '_top'],
    control: { type: 'radio' },
  },
  children: {
    table: {
      disable: true,
    },
  },
  onToggle: {
    table: {
      disable: true,
    },
  },
};
