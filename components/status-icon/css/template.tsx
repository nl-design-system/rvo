/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import iconList from '@nl-rvo/assets/icons';
import '@nl-rvo/assets/icons/index.css';
import clsx from 'clsx';
import React from 'react';

interface IStatusIconProps {
  type: string;
  size: string;
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
    options: ['small', 'medium', 'large'],
    mapping: { small: 'sm', medium: 'md', large: 'lg' },
    control: { type: 'radio' },
  },
};

export const defaultArgs: IStatusIconProps = {
  type: argTypes.type.options[0],
  size: argTypes.size.options[1],
};

export const StatusIcon: React.FC<IStatusIconProps> = ({ type = defaultArgs.type, size = defaultArgs.size }) => {
  const iconName = type.toLowerCase().replace(/_/g, '-');
  return (
    <div className={clsx('rvo-icon', `rvo-icon--${iconName} rvo-status-icon--${iconName}`, `rvo-icon--${size}`)} />
  );
};
