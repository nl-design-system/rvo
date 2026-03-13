import { iconColors, iconNames as iconOptions } from '@nl-rvo/component-library-react/src/components/icon';

/**
 * Storybook-only argTypes copied from React component source.
 */
export const argTypes = {
  icon: {
    control: { type: 'select' },
    options: iconOptions,
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
