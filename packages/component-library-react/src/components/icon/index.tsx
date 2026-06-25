/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
// @ts-ignore
import clsx from 'clsx';
import React from 'react';
import { IconType } from './types';
import '@nl-rvo/component-library-css/dist/components/icon.css';

export interface IIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: IconType;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  color?: 'hemelblauw' | 'donkerblauw' | 'wit' | 'zwart' | 'grijs-700' | 'lintblauw';
  className?: string;
  ariaLabel?: string;
}

export const Icon: React.FC<IIconProps & React.HTMLAttributes<HTMLSpanElement>> = ({
  icon,
  size = 'md',
  color = 'hemelblauw',
  ariaLabel,
  className,
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
        className,
      )}
      role="img"
      style={{ ['--rvo-icon-current' as string]: `var(--rvo-icon-${iconName})` }}
      aria-label={(ariaLabel?.length
        ? ariaLabel
        : iconName.charAt(0).toUpperCase() + iconName.substr(1).toLowerCase()
      ).replace(/-/g, ' ')}
      {...rootElementProps}
    ></span>
  );
};

export default Icon;
