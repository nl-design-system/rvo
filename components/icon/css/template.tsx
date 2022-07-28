/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import iconList from '@nl-rvo/assets/icons';
import clsx from 'clsx';
import React from 'react';

interface IIconProps {
  icon: string;
  size: string;
  color?: string;
}

const toProperCase = (inputString) =>
  inputString.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

// eslint-disable-next-line no-unused-vars
const { STATUS, ...iconListWithoutStatus } = iconList;

export const options = Object.keys(iconListWithoutStatus).flatMap((categoryOrIconName) => {
  if (typeof iconList[categoryOrIconName] === 'object') {
    return Object.keys(iconList[categoryOrIconName]).map((iconName) =>
      toProperCase(`${categoryOrIconName} > ${iconName}`),
    );
  } else {
    return toProperCase(iconList[categoryOrIconName].replace('.svg', ''));
  }
});

export const iconNames = options.map((option) => {
  let iconName = option;
  if (iconName.indexOf(' > ') > -1) {
    iconName = iconName.split(' > ')[1];
  }
  return iconName.toLowerCase().replace(/_/g, '-');
});

export const argTypes = {
  icon: {
    control: 'select',
    options: options,
  },
  size: {
    options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    control: { type: 'radio' },
  },
  color: {
    options: ['hemelblauw', 'wit'],
    control: { type: 'radio' },
  },
};

export const defaultArgs: IIconProps = {
  icon: argTypes.icon.options[0],
  size: argTypes.size.options[1],
  color: argTypes.color.options[0],
};

export const Icon: React.FC<IIconProps> = ({
  icon = defaultArgs.icon,
  size = defaultArgs.size,
  color = defaultArgs.color,
}) => {
  let iconName = icon;
  if (icon.indexOf(' > ') > -1) {
    iconName = icon.split(' > ')[1];
  }

  return (
    <div
      className={clsx('rvo-icon', `rvo-icon-${iconName.toLowerCase().replace(/_/g, '-')}`, `rvo-icon--${size}`, {
        'rvo-icon--wit': !color || color === 'wit',
        'rvo-icon--hemelblauw': color === 'hemelblauw',
      })}
    ></div>
  );
};
