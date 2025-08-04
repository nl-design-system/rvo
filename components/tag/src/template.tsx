/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Icon } from '../../icon/src/template';
import { IconType } from '../../icon/src/types';
import { StatusIcon } from '../../status-icon/src/template';
import './index.scss';

export interface ITagProps {
  content: ReactNode;
  type?: 'info' | 'success' | 'error' | 'warning';
  showIcon?: 'before' | 'after';
  icon?: IconType;
  /** @uxpinignoreprop */
  className?: string;
  link?: string;
  linkTarget?: '_blank' | '_self' | '_parent' | '_top';
  onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>) => void;
}

export const Tag: React.FC<ITagProps> = ({
  content,
  type,
  showIcon,
  icon,
  className,
  link,
  linkTarget = '_self',
  onClick,
}: ITagProps) => {
  // Parse icon markup
  let iconMarkup;

  if (icon) {
    iconMarkup = Icon({
      icon: icon as any,
      size: 'lg',
      color: '',
      className: showIcon !== undefined ? `rvo-link__icon--${showIcon}` : '',
    });
  } else {
    switch (type) {
      case 'info':
        // case 'waarschuwing':
        // case 'foutmelding':
        // case 'bevestiging':
        iconMarkup = StatusIcon({ type: type, size: 'lg', ignoreDefaultIconColor: true });
        break;
      default:
        iconMarkup = Icon({
          icon: icon as any,
          size: 'lg',
          color: '',
          className: showIcon !== undefined ? `rvo-link__icon--${showIcon}` : '',
        });
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
        showIcon && ['rvo-tag--with-icon'],
        type !== undefined ? `rvo-tag--${type}` : 'rvo-tag--default',
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
