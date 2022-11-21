/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { IconType } from '@nl-rvo/assets/icons/types';
import clsx from 'clsx';
import React from 'react';
import { Icon, iconColors, options as iconOptions } from '../../icon/css/template';
import { defaultArgs } from './defaultArgs';
import './index.scss';
export interface ILinkProps {
  content: string;
  url: string;
  showIcon?: string;
  icon?: IconType;
  iconSize?: string;
  iconColor?: string;
  hover?: boolean;
  active?: boolean;
  focus?: boolean;
  noUnderline?: boolean;
  classNames?: string[];
}

export const argTypes = {
  content: {
    control: 'text',
  },
  url: {
    control: 'text',
  },
  showIcon: {
    options: ['no', 'before', 'after'],
    control: { type: 'radio' },
  },
  icon: {
    control: 'select',
    options: iconOptions,
  },
  iconSize: {
    options: ['sm', 'md'],
    control: { type: 'radio' },
  },
  iconColor: {
    options: iconColors,
    control: { type: 'radio' },
  },
  hover: {
    control: 'boolean',
  },
  active: {
    control: 'boolean',
  },
  focus: {
    control: 'boolean',
  },
  noUnderline: {
    control: 'boolean',
  },
};

export const Link: React.FC<ILinkProps> = ({
  content = defaultArgs.content,
  url = defaultArgs.url,
  showIcon = defaultArgs.showIcon,
  icon = defaultArgs.icon,
  iconSize = defaultArgs.iconSize,
  iconColor = defaultArgs.iconColor,
  hover = defaultArgs.hover,
  active = defaultArgs.active,
  focus = defaultArgs.focus,
  noUnderline = defaultArgs.noUnderline,
  classNames = [],
}: ILinkProps) => {
  // Parse icon markup
  const iconClassNames = [];
  if (showIcon === 'before') {
    iconClassNames.push('rvo-link__icon--before');
  }
  if (showIcon === 'after') {
    iconClassNames.push('rvo-link__icon--after');
  }
  const iconMarkup = Icon({
    icon: icon as any,
    size: iconSize as any,
    color: iconColor as any,
    classNames: iconClassNames,
  });

  return (
    <a
      href={url}
      className={clsx(
        'rvo-link',
        classNames,
        {
          'rvo-link--active': active,
          'rvo-link--hover': hover,
          'rvo-link--focus': focus,
        },
        showIcon !== 'no' && ['rvo-layout-row', 'rvo-layout-gap--sm'],
        noUnderline && 'rvo-link--no-underline',
      )}
    >
      {showIcon === 'before' && iconMarkup}
      {content}
      {showIcon === 'after' && iconMarkup}
    </a>
  );
};

export default Link;
