/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import { Icon, options as iconOptions } from '../../icon/src/template';
import { IconType } from '../../icon/src/types';
import { StatusIcon } from '../../status-icon/src/template';
import './index.scss';

export interface ITagProps {
  content: ReactNode;
  type: 'default' | 'info' | 'bevestiging' | 'foutmelding' | 'waarschuwing';
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
    options: ['default', 'info', 'bevestiging', 'foutmelding', 'waarschuwing'],
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

  if (icon) {
    iconMarkup = Icon({ icon: icon as any, size: 'lg', color: '', className: iconClassName });
  } else {
    switch (type) {
      case 'info':
      case 'waarschuwing':
      case 'foutmelding':
      case 'bevestiging':
        iconMarkup = StatusIcon({ type: type, size: 'lg', ignoreDefaultIconColor: true });
        break;
      default:
        iconMarkup = Icon({ icon: icon as any, size: 'lg', color: '', className: iconClassName });
        break;
    }
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
        type === 'waarschuwing' && 'rvo-tag--warning',
        type === 'foutmelding' && 'rvo-tag--error',
        type === 'bevestiging' && 'rvo-tag--success',
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
