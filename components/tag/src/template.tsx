/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import { defaultArgs } from './defaultArgs';
import { Icon, options as iconOptions } from '../../icon/src/template';
import { IconType } from '../../icon/src/types';
import { StatusIcon } from '../../status-icon/src/template';
import './index.scss';

export interface ITagProps {
  content: string;
  type: 'default' | 'info' | 'warning' | 'error' | 'success';
  showIcon?: 'no' | 'before' | 'after';
  icon?: IconType;
  showHover?: boolean;
  active?: boolean;
  focus?: boolean;
  /** @uxpinignoreprop */
  className?: string;
  link?: string;
  linkTarget?: '_blank' | '_self' | '_parent' | '_top';
  onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>) => void;
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
  onClick: {
    table: {
      disable: true,
    },
  },
};

export const Tag: React.FC<ITagProps> = ({
  content = defaultArgs.content,
  type = defaultArgs.type,
  showIcon = defaultArgs.showIcon,
  icon = defaultArgs.icon,
  active = defaultArgs.active,
  showHover = defaultArgs.showHover,
  focus = defaultArgs.focus,
  className,
  link,
  linkTarget = '_self',
  onClick,
}: ITagProps) => {
  // Parse icon markup
  let iconClassName = '';
  if (showIcon === 'before') {
    iconClassName += 'rvo-link__icon--before';
  }
  if (showIcon === 'after') {
    iconClassName += ' rvo-link__icon--after';
  }

  let iconMarkup;
  switch (type) {
    default:
    case 'default':
      iconMarkup = Icon({ icon: icon as any, size: 'lg', color: '', className: iconClassName });
      break;
    case 'info':
      iconMarkup = Icon({ icon: 'info', size: 'xl', color: '', className: iconClassName });
      break;
    case 'warning':
      iconMarkup = StatusIcon({ type: 'waarschuwing', size: 'lg', ignoreDefaultIconColor: true });
      break;
    case 'error':
      iconMarkup = StatusIcon({ type: 'foutmelding', size: 'lg', ignoreDefaultIconColor: true });
      break;
    case 'success':
      iconMarkup = StatusIcon({ type: 'bevestiging', size: 'lg', ignoreDefaultIconColor: true });
      break;
  }

  const TagElement = link ? 'a' : 'div';

  return (
    <TagElement
      {...(link ? { href: link } : {})}
      target={linkTarget}
      className={clsx(
        'rvo-tag',
        className,
        showIcon !== 'no' && ['rvo-tag--with-icon'],
        {
          'rvo-tag--active': active,
          'rvo-tag--show-hover': showHover,
          'rvo-tag--focus': focus,
          'rvo-tag--hover': link,
        },
        type === 'default' && 'rvo-tag--default',
        type === 'info' && 'rvo-tag--info',
        type === 'warning' && 'rvo-tag--warning',
        type === 'error' && 'rvo-tag--error',
        type === 'success' && 'rvo-tag--success',
      )}
      onClick={onClick}
    >
      {showIcon === 'before' && iconMarkup}
      {content}
      {showIcon === 'after' && iconMarkup}
    </TagElement>
  );
};

export default Tag;
