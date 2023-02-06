/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { IconType } from '@nl-rvo/assets/icons/types';
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import { Icon, iconColors, options as iconOptions } from '../../icon/css/template';
import { defaultArgs } from './defaultArgs';
import './index.scss';
export interface ILinkProps {
  content?: string;
  href?: string;
  showIcon?: string;
  icon?: IconType;
  iconSize?: string;
  iconColor?: string;
  hover?: boolean;
  active?: boolean;
  focus?: boolean;
  noUnderline?: boolean;
  className?: string;
  target?: string;
  children?: React.ReactNode;
}

export const argTypes = {
  content: {
    control: 'text',
  },
  href: {
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

export const Link: React.FC<PropsWithChildren<ILinkProps>> = ({
  content = defaultArgs.content,
  href = defaultArgs.href,
  showIcon = defaultArgs.showIcon,
  icon = defaultArgs.icon,
  iconSize = defaultArgs.iconSize,
  iconColor = defaultArgs.iconColor,
  hover = defaultArgs.hover,
  active = defaultArgs.active,
  focus = defaultArgs.focus,
  noUnderline = defaultArgs.noUnderline,
  className,
  children,
  ...otherProps
}: ILinkProps) => {
  // Parse icon markup
  let iconClassName = '';
  if (showIcon === 'before') {
    iconClassName += 'rvo-link__icon--before';
  }
  if (showIcon === 'after') {
    iconClassName += ' rvo-link__icon--after';
  }
  const iconMarkup = Icon({
    icon: icon as any,
    size: iconSize as any,
    color: iconColor as any,
    className: iconClassName,
  });

  const props = {
    className: clsx(
      'rvo-link',
      className,
      {
        'rvo-link--active': active,
        'rvo-link--hover': hover,
        'rvo-link--focus': focus,
      },
      showIcon !== 'no' && ['rvo-layout-row', 'rvo-layout-gap--sm'],
      noUnderline && 'rvo-link--no-underline',
    ),
    ...otherProps,
  };
  if (href) {
    return (
      <a href={href} {...props}>
        {showIcon === 'before' && iconMarkup}
        {children || content}
        {showIcon === 'after' && iconMarkup}
      </a>
    );
  } else {
    return (
      <span {...props}>
        {' '}
        {showIcon === 'before' && iconMarkup}
        {children || content}
        {showIcon === 'after' && iconMarkup}
      </span>
    );
  }
};

export default Link;
