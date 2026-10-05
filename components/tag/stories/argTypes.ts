import { iconNames } from '@nl-rvo/component-library-react/src/components/icon';

/**
 * Storybook-only argTypes copied from React component source.
 */
export const argTypes = {
  content: {
    control: 'text',
  },
  type: {
    options: ['info', 'success', 'error', 'warning'],
    control: { type: 'select' },
  },
  iconPlacement: {
    options: ['before', 'after'],
    control: { type: 'select' },
  },
  icon: {
    control: { type: 'select' },
    options: iconNames,
  },
  isPill: {
    control: 'boolean',
  },
  url: {
    control: 'text',
  },
};
