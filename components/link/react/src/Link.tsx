/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import { Icon } from '../../../icon/react/src/Icon';
import { ILinkProps } from './Link.types';
import '@nl-rvo/css-link';

export const Link: React.FC<ILinkProps> = ({
  href = '#',
  color = 'hemelblauw',
  weight = 'bold',
  iconPlacement,
  icon = 'home',
  iconSize = 'md',
  iconColor = 'hemelblauw',
  hover = false,
  active = false,
  focus = false,
  noUnderline = false,
  fullContainerLink = false,
  callToAction = false,
  outline = false,
  className,
  children,
  LinkComponent,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  iconAriaLabel: _iconAriaLabel,
  ...otherProps
}: ILinkProps) => {
  const iconMarkup =
    iconPlacement && icon
      ? Icon({
          icon: icon as any,
          size: iconSize as any,
          color: iconColor as any,
        })
      : null;

  const linkClassName = clsx('rvo-link', className, {
    'rvo-link--hover': hover,
    'rvo-link--active': active,
    'rvo-link--focus': focus,
    'rvo-link--with-icon': iconPlacement && icon,
    'rvo-link--no-underline': noUnderline,
    'rvo-link--full-card-link': fullContainerLink,
    'rvo-link--normal': weight === 'normal',
    'rvo-link--donkerblauw': color === 'donkerblauw',
    'rvo-link--lintblauw': color === 'lintblauw',
    'rvo-link--wit': color === 'wit',
    'rvo-link--zwart': color === 'zwart',
    'rvo-link--grijs-700': color === 'grijs-700',
    'rvo-link--call-to-action': callToAction,
    'rvo-link--call-to-action-outline': callToAction && outline,
  });

  const linkContent = (
    <>
      {iconPlacement === 'left' && iconMarkup}
      {children && <span className="rvo-link__text">{children}</span>}
      {iconPlacement === 'right' && iconMarkup}
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
