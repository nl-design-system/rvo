/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import iconList from '@nl-rvo/assets/icons/index.js';
import clsx from 'clsx';
import React from 'react';
import { defaultArgs } from './defaultArgs';
import { IconType } from '../icon/types';
import './index.scss';
export interface IIconProps {
  icon: IconType;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  color?: '' | 'hemelblauw' | 'donkerblauw' | 'wit' | 'zwart' | 'grijs-700';
  className?: string;
  ariaLabel?: string;
  onClick?: (event: React.MouseEvent) => void;
}

export const iconColors = ['', 'hemelblauw', 'donkerblauw', 'wit', 'zwart', 'grijs-700'];

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
    control: { type: 'select' },
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
  ariaLabel: {
    control: { type: 'text' },
  },
};

export const Icon: React.FC<IIconProps | HTMLSpanElement> = ({
  icon = defaultArgs.icon,
  size = defaultArgs.size,
  color = defaultArgs.color,
  ariaLabel = defaultArgs.ariaLabel,
  className,
  ...props
}: IIconProps) => {
  let iconName = icon as string;
  if (icon.indexOf(' > ') > -1) {
    iconName = icon.split(' > ')[1].replace(/ /g, '-').toLowerCase();
  }

  return (
    <span
      className={clsx(
        'utrecht-icon',
        'rvo-icon',
        `rvo-icon-${iconName}`,
        size && `rvo-icon--${size}`,
        {
          'rvo-icon--hemelblauw': color === 'hemelblauw',
          'rvo-icon--donkerblauw': color === 'donkerblauw',
          'rvo-icon--wit': color === 'wit',
          'rvo-icon--zwart': color === 'zwart',
          'rvo-icon--grijs-700': color === 'grijs-700',
        },
        className,
      )}
      role="img"
      aria-label={(ariaLabel?.length
        ? ariaLabel
        : iconName.charAt(0).toUpperCase() + iconName.substr(1).toLowerCase()
      ).replace(/-/g, ' ')}
      {...props}
    ></span>
  );
};

export default Icon;
