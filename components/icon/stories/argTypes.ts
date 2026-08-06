import { iconColors, iconNames } from '../../utils/iconUtils';

/**
 * Storybook-only argTypes copied from React component source.
 */
export const argTypes = {
  icon: {
    control: { type: 'select' },
    options: iconNames,
  },
  size: {
    options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    control: { type: 'radio' },
  },
  color: {
    options: iconColors,
    control: { type: 'radio' },
  },
  ariaLabel: {
    control: { type: 'text' },
  },
};
