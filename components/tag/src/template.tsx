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
  iconPlacement?: 'before' | 'after';
  icon?: IconType;
  isPill?: boolean;
  /** @uxpinignoreprop */
  className?: string;
  url?: string;
  urlTarget?: '_blank' | '_self' | '_parent' | '_top';
  onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>) => void;
}

export const Tag: React.FC<ITagProps> = ({
  content,
  type,
  iconPlacement,
  icon,
  className,
  url,
  urlTarget = '_self',
  onClick,
  isPill,
}: ITagProps) => {
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
    >
      {iconPlacement === 'before' && iconMarkup}
      {content}
      {iconPlacement === 'after' && iconMarkup}
    </TagElement>
  );
};

export default Tag;
