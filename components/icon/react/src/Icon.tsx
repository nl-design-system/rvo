/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
// @ts-ignore
import clsx from 'clsx';
import React from 'react';
import '@nl-rvo/css-icon';
import { IIconProps } from './Icon.types';
import iconList from '@nl-rvo/assets/icons/index.js';

export const iconColors = ['', 'hemelblauw', 'donkerblauw', 'wit', 'zwart', 'grijs-700', 'lintblauw'];

export const toProperCase = (inputString: string) =>
  inputString
    .replace(/\w\S*/g, (txt: string) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
    .replace(/_/g, ' ');

// Icon Options
export const iconOptions = Object.keys(iconList).flatMap((categoryOrIconName) => {
  if (typeof iconList[categoryOrIconName] === 'object') {
    return Object.keys(iconList[categoryOrIconName]).map((iconName) =>
      toProperCase(`${categoryOrIconName} > ${iconName}`),
    );
  } else {
    return toProperCase(iconList[categoryOrIconName].toString().replace('.svg', ''));
  }
});

// IconNames
export const iconNames = iconOptions.map((option) => {
  let iconName = option;
  if (iconName.indexOf(' > ') > -1) {
    iconName = iconName.split(' > ')[1];
  }
  return decodeURIComponent(iconName).toLowerCase().replace(/\s+/g, '-');
});

export const Icon: React.FC<IIconProps & React.HTMLAttributes<HTMLSpanElement>> = ({
  icon,
  size = 'md',
  color = 'hemelblauw',
  ariaLabel,
  className,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ariaLabel: _ariaLabel,
  ...rootElementProps
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
        size && `rvo-icon--${size}`,
        color && `rvo-icon--${color}`,
        icon && `rvo-icon-${iconName}`,
        className,
      )}
      role="img"
      aria-hidden={true}
      {...rootElementProps}
    ></span>
  );
};

export default Icon;
