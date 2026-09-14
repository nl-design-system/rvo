/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { Icon } from '../../../icon/react/src/Icon';
import '@nl-rvo/css-status-icon';
import { IStatusIconProps } from './StatusIcon.types';

export const StatusIcon: React.FC<IStatusIconProps> = ({
  type,
  size = 'md',
  className,
  ignoreDefaultIconColor,
  ...rootElementProps
}) => {
  const iconName = type.toLowerCase().replace(/_/g, '-');

  let parsedClassName = '';
  if (!ignoreDefaultIconColor) {
    parsedClassName += `rvo-status-icon-${iconName}`;
  }

  if (className) {
    parsedClassName += ` ${className}`;
  }

  return (
    <Icon
      icon={iconName as any}
      size={size as any}
      color={'' as any}
      className={parsedClassName}
      {...rootElementProps}
    />
  );
};

export default StatusIcon;
