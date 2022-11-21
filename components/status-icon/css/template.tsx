/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { Icon } from '../../icon/css/template';
import { defaultArgs } from './defaultArgs';
import './index.scss';

export interface IStatusIconProps {
  type: 'info' | 'bevestiging' | 'foutmelding' | 'waarschuwing';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  classNames?: string[];
}

export const argTypes = {
  type: {
    control: 'select',
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
  classNames,
}: IStatusIconProps) => {
  const iconName = type.toLowerCase().replace(/_/g, '-');
  return (
    <Icon
      icon={iconName as any}
      size={size as any}
      classNames={[`rvo-status-icon-${iconName}`, ...(classNames || [])]}
    />
  );
};

export default StatusIcon;
