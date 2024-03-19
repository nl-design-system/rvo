/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import { defaultArgs } from './defaultArgs';
import { Icon, iconColors, options as iconOptions } from '../icon/template';
import { IconType } from '../icon/types';
import './index.scss';
export interface ILinkProps {
  content?: string;
  href?: string;
  color?: 'hemelblauw' | 'donkerblauw' | 'logoblauw' | 'wit' | 'zwart' | 'grijs-700';
  weight?: 'normal' | 'bold';
  onClick?: (event) => void;
  showIcon?: 'no' | 'before' | 'after';
  icon?: IconType;
  iconSize?: 'sm' | 'md';
  iconColor?: 'hemelblauw' | 'donkerblauw' | 'logoblauw' | 'wit' | 'zwart' | 'grijs-700';
  iconAriaLabel?: string;
  hover?: boolean;
  active?: boolean;
  focus?: boolean;
  noUnderline?: boolean;
  fullContainerLink?: boolean;
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
  color: {
    control: { type: 'select' },
    options: ['hemelblauw', 'donkerblauw', 'logoblauw', 'wit', 'zwart', 'grijs-700'],
  },
  weight: {
    control: { type: 'select' },
    options: ['normal', 'bold'],
  },
  showIcon: {
    options: ['no', 'before', 'after'],
    control: { type: 'radio' },
  },
  icon: {
    control: { type: 'select' },
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
  iconAriaLabel: { control: 'text' },
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
  fullContainerLink: {
    control: 'boolean',
  },
};

export const Link: React.FC<PropsWithChildren<ILinkProps>> = ({
  content = defaultArgs.content,
  href = defaultArgs.href,
  color = defaultArgs.color,
  weight = defaultArgs.weight,
  showIcon = defaultArgs.showIcon,
  icon = defaultArgs.icon,
  iconSize = defaultArgs.iconSize,
  iconColor = defaultArgs.iconColor,
  iconAriaLabel = defaultArgs.iconAriaLabel,
  hover = defaultArgs.hover,
  active = defaultArgs.active,
  focus = defaultArgs.focus,
  noUnderline = defaultArgs.noUnderline,
  fullContainerLink = defaultArgs.fullContainerLink,
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
    ariaLabel: iconAriaLabel,
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
      showIcon !== 'no' && ['rvo-link--with-icon'],
      noUnderline && 'rvo-link--no-underline',
      color === 'donkerblauw' && 'rvo-link--donkerblauw',
      color === 'logoblauw' && 'rvo-link--logoblauw',
      color === 'wit' && 'rvo-link--wit',
      color === 'zwart' && 'rvo-link--zwart',
      color === 'grijs-700' && 'rvo-link--grijs-700',
      weight === 'normal' && 'rvo-link--normal',
      fullContainerLink && 'rvo-link--full-container',
    ),
    ...otherProps,
  };
  return (
    <a {...props} href={href}>
      {showIcon === 'before' && iconMarkup}
      {children || content}
      {showIcon === 'after' && iconMarkup}
    </a>
  );
};

export default Link;
