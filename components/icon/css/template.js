/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import iconList from '@nl-rvo/assets/icons';
import '@nl-rvo/assets/icons/index.css';
import clsx from 'clsx';

String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

// eslint-disable-next-line no-unused-vars
const { STATUS, ...iconListWithoutStatus } = iconList;

const options = Object.keys(iconListWithoutStatus).flatMap((categoryName) => {
  return Object.keys(iconList[categoryName]).map((iconName) => `${categoryName} > ${iconName}`.toProperCase());
});

export const argTypes = {
  icon: {
    description: 'Icon',
    control: 'select',
    options: options,
  },
  size: {
    options: ['small', 'medium', 'large'],
    control: { type: 'radio' },
  },
  color: {
    options: ['hemelblauw', 'wit'],
    control: { type: 'radio' },
  },
};

export const defaultArgs = {
  icon: argTypes.icon.options[0],
  size: argTypes.size.options[1],
  color: argTypes.color.options[0],
};

export const Icon = ({ icon = defaultArgs.icon, size = defaultArgs.size, color = defaultArgs.color }) => {
  const [, iconName] = icon.split(' > ');

  return `<span class="${clsx('rvo-icon', `rvo-icon--${iconName.toLowerCase().replace(/_/g, '-')}`, {
    'rvo-icon--small': size === 'small',
    'rvo-icon--medium': size === 'medium',
    'rvo-icon--large': size === 'large',
    'rvo-icon--wit': color === 'wit',
    'rvo-icon--hemelblauw': color === 'hemelblauw',
  })}" />`;
};
