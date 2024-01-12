/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { defaultArgs } from './defaultArgs';
import { Icon } from '../icon/template';
import './index.scss';

export interface IStatusIconProps {
  type: 'info' | 'bevestiging' | 'foutmelding' | 'waarschuwing';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  className?: string;
  ignoreDefaultIconColor?: boolean;
}

export const argTypes = {
  type: {
    control: { type: 'select' },
    options: ['info', 'bevestiging', 'foutmelding', 'waarschuwing'],
  },
  size: {
    options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    control: { type: 'radio' },
  },
};

export const StatusIcon: React.FC<IStatusIconProps> = ({
  type = defaultArgs.type,
  size = defaultArgs.size,
  className,
  ignoreDefaultIconColor,
}: IStatusIconProps) => {
  const iconName = type.toLowerCase().replace(/_/g, '-');

  let parsedClassName = '';
  if (!ignoreDefaultIconColor) {
    parsedClassName += `rvo-status-icon-${iconName}`;
  }

  if (className) {
    parsedClassName += ` ${className}`;
  }

  return <Icon icon={iconName as any} size={size as any} color="" className={parsedClassName} />;
};

export default StatusIcon;
