/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import { Icon } from '../icon';
import { IconType } from '../icon/types';
import '@nl-rvo/component-library-css/dist/components/link.css';

export type LinkStyleProps = {
  className: string;
} & Omit<React.HTMLAttributes<HTMLAnchorElement>, 'className'>;

export type LinkCustomLinkComponentProps = {
  children: React.ReactNode;
  href: string;
  linkProps: LinkStyleProps;
};

export type LinkCustomLinkComponent = React.ComponentType<LinkCustomLinkComponentProps>;

export interface ILinkProps extends HTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  children: React.ReactNode;
  className?: string;
  color?: 'hemelblauw' | 'donkerblauw' | 'lintblauw' | 'wit' | 'zwart' | 'grijs-700' | string;
  focus?: boolean;
  fullContainerLink?: boolean;
  hover?: boolean;
  href?: string;
  icon?: IconType;
  iconAriaLabel?: string;
  iconColor?: 'hemelblauw' | 'donkerblauw' | 'lintblauw' | 'wit' | 'zwart' | 'grijs-700';
  iconSize?: 'sm' | 'md';
  LinkComponent?: LinkCustomLinkComponent;
  noUnderline?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  role?: string;
  showIcon?: 'no' | 'before' | 'after';
  target?: string;
  weight?: 'normal' | 'bold';
}

export const Link: React.FC<ILinkProps> = ({
  href = '#',
  color = 'hemelblauw',
  weight = 'bold',
  showIcon = 'no',
  icon = 'home',
  iconSize = 'md',
  iconColor = 'hemelblauw',
  iconAriaLabel = '',
  hover = false,
  active = false,
  focus = false,
  noUnderline = false,
  fullContainerLink = false,
  className,
  children,
  LinkComponent,
  ...otherProps
}: ILinkProps) => {
  const iconMarkup =
    showIcon !== 'no'
      ? Icon({
          icon: icon as any,
          size: iconSize as any,
          color: iconColor as any,
          ariaLabel: iconAriaLabel,
        })
      : null;

  const linkClassName = clsx('rvo-link', className, {
    'rvo-link--hover': hover,
    'rvo-link--active': active,
    'rvo-link--focus': focus,
    'rvo-link--with-icon': showIcon !== 'no',
    'rvo-link--no-underline': noUnderline,
    'rvo-link--full-card-link': fullContainerLink,
    'rvo-link--normal': weight === 'normal',
    'rvo-link--donkerblauw': color === 'donkerblauw',
    'rvo-link--lintblauw': color === 'lintblauw',
    'rvo-link--wit': color === 'wit',
    'rvo-link--zwart': color === 'zwart',
    'rvo-link--grijs-700': color === 'grijs-700',
  });

  const linkContent = (
    <>
      {showIcon === 'before' && iconMarkup}
      <span className="rvo-link__text">{children}</span>
      {showIcon === 'after' && iconMarkup}
    </>
  );

  if (LinkComponent && href) {
    return (
      <LinkComponent href={href} linkProps={{ className: linkClassName, ...otherProps }}>
        {linkContent}
      </LinkComponent>
    );
  }

  return (
    <a href={href} className={linkClassName} {...otherProps}>
      {linkContent}
    </a>
  );
};

export default Link;
