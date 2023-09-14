/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { Icon as UtrechtIcon } from '@utrecht/component-library-react';
import type { IconProps as UtrechtIconProps } from '@utrecht/component-library-react/dist/Icon';
import clsx from 'clsx';

export type IconColor = 'hemelblauw' | 'wit' | 'zwart';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

export interface IconProps extends UtrechtIconProps {
  icon: string;
  size?: string | IconSize;
  color?: string | IconColor;
}

export const Icon = ({ icon, size, color, className }: IconProps) => {
  let iconName = icon;
  if (icon.indexOf(' > ') > -1) {
    iconName = icon.split(' > ')[1];
  }

  return (
    <UtrechtIcon
      className={clsx(
        'rvo-icon',
        `rvo-icon-${iconName.toLowerCase().replace(/_/g, '-')}`,
        size && `rvo-icon--${size}`,
        {
          'rvo-icon--wit': color === 'wit',
          'rvo-icon--hemelblauw': color === 'hemelblauw',
          'rvo-icon--zwart': color === 'zwart',
        },
        className,
      )}
    />
  );
};
