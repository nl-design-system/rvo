/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { IconType } from '@nl-rvo/assets/icons/types';
import clsx from 'clsx';
import React from 'react';
import { Icon, options as iconOptions } from '../../icon/css/template';
import { StatusIcon } from '../../status-icon/css/template';
import './index.scss';
import { defaultArgs } from './defaultArgs';

export interface ITagProps {
  content: string;
  type: 'default' | 'info' | 'warning' | 'error' | 'success';
  showIcon?: string;
  icon?: IconType;
  hover?: boolean;
  disableHover?: boolean;
  active?: boolean;
  focus?: boolean;
  classNames?: string[];
}

export const argTypes = {
  content: {
    control: 'text',
  },
  type: {
    options: ['default', 'info', 'warning', 'error', 'success'],
    control: { type: 'radio' },
  },
  showIcon: {
    options: ['no', 'before', 'after'],
    control: { type: 'radio' },
  },
  icon: {
    control: 'select',
    options: iconOptions,
  },
  hover: {
    control: 'boolean',
  },
  disableHover: {
    control: 'boolean',
  },
  active: {
    control: 'boolean',
  },
  focus: {
    control: 'boolean',
  },
};

export const Tag: React.FC<ITagProps> = ({
  content = defaultArgs.content,
  type = defaultArgs.type,
  showIcon = defaultArgs.showIcon,
  icon = defaultArgs.icon,
  active = defaultArgs.active,
  hover = defaultArgs.hover,
  disableHover = defaultArgs.disableHover,
  focus = defaultArgs.focus,
  classNames,
}: ITagProps) => {
  // Parse icon markup
  const iconClassNames: string[] = [];
  if (showIcon === 'before') {
    iconClassNames.push('rvo-link__icon--before');
  }
  if (showIcon === 'after') {
    iconClassNames.push('rvo-link__icon--after');
  }

  let iconMarkup;
  switch (type) {
    default:
    case 'default':
      iconMarkup = Icon({ icon: icon as any, size: 'lg', classNames: iconClassNames });
      break;
    case 'info':
      iconMarkup = Icon({ icon: 'info', size: 'xl', color: 'hemelblauw', classNames: iconClassNames });
      break;
    case 'warning':
      iconMarkup = StatusIcon({ type: 'waarschuwing', size: 'lg' });
      break;
    case 'error':
      iconMarkup = StatusIcon({ type: 'foutmelding', size: 'lg' });
      break;
    case 'success':
      iconMarkup = StatusIcon({ type: 'bevestiging', size: 'lg' });
      break;
  }

  return (
    <div
      className={clsx(
        'rvo-tag',
        classNames,
        showIcon !== 'no' && ['rvo-tag--with-icon', 'rvo-layout-row', 'rvo-layout-gap--sm'],
        {
          'rvo-tag--active': active,
          'rvo-tag--hover': hover,
          'rvo-tag--focus': focus,
          'rvo-tag--nohover': disableHover,
        },
        type === 'default' && 'rvo-tag--default',
        type === 'info' && 'rvo-tag--info',
        type === 'warning' && 'rvo-tag--warning',
        type === 'error' && 'rvo-tag--error',
        type === 'success' && 'rvo-tag--success',
      )}
    >
      {showIcon === 'before' && iconMarkup}
      {content}
      {showIcon === 'after' && iconMarkup}
    </div>
  );
};

export default Tag;
