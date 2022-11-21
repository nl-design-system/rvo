/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import iconList from '@nl-rvo/assets/icons/index.js';
import { IconType } from '@nl-rvo/assets/icons/types';
import clsx from 'clsx';
import React from 'react';
import './index.scss';
import { defaultArgs } from './defaultArgs';
export interface IIconProps {
  icon: IconType;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  color?: '' | 'hemelblauw' | 'wit' | 'zwart';
  classNames?: string[];
}

export const iconColors = ['', 'hemelblauw', 'wit', 'zwart'];

export const toProperCase = (inputString) =>
  inputString.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()).replace(/_/g, ' ');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    control: { type: 'radio' },
  },
  color: {
    options: iconColors,
    control: { type: 'radio' },
  },
};

export const Icon: React.FC<IIconProps> = ({
  icon = defaultArgs.icon,
  size = defaultArgs.size,
  color = defaultArgs.color,
  classNames,
}: IIconProps) => {
  let iconName = icon as string;
  if (icon.indexOf(' > ') > -1) {
    iconName = icon.split(' > ')[1];
  }

  return (
    <span
      className={clsx(
        'utrecht-icon',
        'rvo-icon',
        `rvo-icon-${iconName}`,
        size && `rvo-icon--${size}`,
        {
          'rvo-icon--wit': color === 'wit',
          'rvo-icon--hemelblauw': color === 'hemelblauw',
          'rvo-icon--zwart': color === 'zwart',
        },
        classNames,
      )}
    ></span>
  );
};

export default Icon;
