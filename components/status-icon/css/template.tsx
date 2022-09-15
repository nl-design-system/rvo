/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import iconList from '@nl-rvo/assets/icons';
import clsx from 'clsx';
import React from 'react';

interface IStatusIconProps {
  type: string;
  size: string;
  classNames?: string[];
}

const toProperCase = (inputString) => {
  return inputString.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

const options = Object.keys({ STATUS: iconList.STATUS }).flatMap((categoryName) => {
  return Object.keys(iconList[categoryName]).map((iconName) => toProperCase(iconName));
});

export const argTypes = {
  type: {
    control: 'select',
    options: options,
  },
  size: {
    options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    control: { type: 'radio' },
  },
};

export const defaultArgs: IStatusIconProps = {
  type: argTypes.type.options[0],
  size: argTypes.size.options[1],
};

export const StatusIcon: React.FC<IStatusIconProps> = ({
  type = defaultArgs.type,
  size = defaultArgs.size,
  classNames,
}) => {
  const iconName = type.toLowerCase().replace(/_/g, '-');
  return (
    <span
      className={clsx('rvo-icon', `rvo-icon-${iconName} rvo-status-icon-${iconName}`, `rvo-icon--${size}`, classNames)}
    />
  );
};
