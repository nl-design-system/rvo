/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Icon } from '../icon';
import { IconType } from '../icon/types';
import { StatusIcon } from '../status-icon';
import '@nl-rvo/component-library-css/dist/components/tag.css';

export interface ITagProps {
  className?: string;
  children: ReactNode;
  icon?: IconType;
  iconPlacement?: 'before' | 'after';
  isPill?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>) => void;
  type?: 'info' | 'success' | 'error' | 'warning';
  url?: string;
  urlTarget?: '_blank' | '_self' | '_parent' | '_top';
  [key: string]: any; // Allow additional props
}

export const Tag: React.FC<ITagProps & React.HTMLAttributes<HTMLElement>> = ({
  children,
  type,
  iconPlacement,
  icon,
  className,
  url,
  urlTarget = '_self',
  onClick,
  isPill,
  ...rootElementProps
}) => {
  // Parse icon markup
  let iconMarkup;
  enum typeName {
    info = 'info',
    warning = 'waarschuwing',
    error = 'foutmelding',
    success = 'bevestiging',
  }

  if (iconPlacement) {
    iconMarkup = icon
      ? Icon({
          icon: icon as any,
          size: 'lg',
          color: '',
          className: iconPlacement !== undefined ? `rvo-link__icon--${iconPlacement}` : '',
        })
      : StatusIcon({
          type: typeName[type as keyof typeof typeName],
          size: 'lg',
          ignoreDefaultIconColor: true,
        });
  }

  const TagElement = url ? 'a' : 'div';

  return (
    <TagElement
      {...(url ? { href: url } : {})}
      target={urlTarget}
      className={clsx(
        'rvo-tag',
        url && 'rvo-tag--as-link',
        onClick && 'rvo-tag--clickable',
        className,
        iconPlacement && 'rvo-tag--with-icon',
        type !== undefined && `rvo-tag--${type}`,
        isPill && 'rvo-tag--pill',
      )}
      onClick={onClick}
      {...rootElementProps}
    >
      {iconPlacement === 'before' && iconMarkup}
      {children}
      {iconPlacement === 'after' && iconMarkup}
    </TagElement>
  );
};

export default Tag;
