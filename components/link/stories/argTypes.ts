import { iconColors, iconNames as iconOptions } from '@nl-rvo/component-library-react/src/components/icon';

/**
 * Storybook-only argTypes copied from React component source.
 */
export const argTypes = {
  content: {
    control: 'text',
  },
  href: {
    control: 'text',
  },
  color: {
    control: { type: 'select' },
    options: ['hemelblauw', 'donkerblauw', 'lintblauw', 'wit', 'zwart', 'grijs-700'],
  },
  weight: {
    control: { type: 'select' },
    options: ['normal', 'bold'],
  },
  showIcon: {
    options: ['no', 'before', 'after'],
    control: { type: 'radio' },
  },
  icon: {
    control: { type: 'select' },
    options: iconOptions,
  },
  iconSize: {
    options: ['sm', 'md'],
    control: { type: 'radio' },
  },
  iconColor: {
    options: iconColors,
    control: { type: 'radio' },
  },
  iconAriaLabel: { control: 'text' },
  hover: {
    control: 'boolean',
  },
  active: {
    control: 'boolean',
  },
  focus: {
    control: 'boolean',
  },
  noUnderline: {
    control: 'boolean',
  },
  fullContainerLink: {
    control: 'boolean',
  },
  children: {
    table: {
      disable: true,
    },
  },
  onClick: {
    table: {
      disable: true,
    },
  },
};
