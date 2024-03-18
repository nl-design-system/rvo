/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import { defaultArgs } from './defaultArgs';
import { Icon, options as iconOptions } from '../icon/template';
import { IconType } from '../icon/types';
import './index.scss';

export interface IToggleProps {
  content: string;
  showIcon?: 'no' | 'before' | 'after';
  icon?: IconType;
  showHover?: boolean;
  active?: boolean;
  focus?: boolean;
  className?: string;
  link?: string;
  linkTarget?: '_blank' | '_self' | '_parent' | '_top';
}

export const argTypes = {
  content: {
    control: 'text',
  },
  showIcon: {
    options: ['no', 'before', 'after'],
    control: { type: 'radio' },
  },
  icon: {
    control: { type: 'select' },
    options: iconOptions,
  },
  showHover: {
    control: 'boolean',
  },
  active: {
    control: 'boolean',
  },
  focus: {
    control: 'boolean',
  },
  link: {
    control: 'text',
  },
  linkTarget: {
    options: ['_blank', '_self', '_parent', '_top'],
    control: { type: 'radio' },
  },
};

export const Toggle: React.FC<IToggleProps> = ({
  content = defaultArgs.content,
  showIcon = defaultArgs.showIcon,
  icon = defaultArgs.icon,
  active = defaultArgs.active,
  showHover = defaultArgs.showHover,
  focus = defaultArgs.focus,
  className,
  link,
  linkTarget = '_self',
}: IToggleProps) => {
  // Parse icon markup
  let iconClassName = '';
  if (showIcon === 'before') {
    iconClassName += 'rvo-link__icon--before';
  }
  if (showIcon === 'after') {
    iconClassName += ' rvo-link__icon--after';
  }

  const iconMarkup = Icon({ icon: icon as any, size: 'lg', color: '', className: iconClassName });
  const ToggleElement = link ? 'a' : 'div';

  return (
    <ToggleElement
      {...(link ? { href: link } : {})}
      target={linkTarget}
      className={clsx('rvo-toggle', 'rvo-toggle--default', className, showIcon !== 'no' && ['rvo-toggle--with-icon'], {
        'rvo-toggle--active': active,
        'rvo-toggle--show-hover': showHover,
        'rvo-toggle--focus': focus,
        'rvo-toggle--hover': link,
      })}
    >
      {showIcon === 'before' && iconMarkup}
      {content}
      {showIcon === 'after' && iconMarkup}
    </ToggleElement>
  );
};

export default Toggle;
