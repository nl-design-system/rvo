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
  href?: string;
  color?: 'hemelblauw' | 'donkerblauw' | 'lintblauw' | 'wit' | 'zwart' | 'grijs-700' | string;
  weight?: 'normal' | 'bold';
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  showIcon?: 'no' | 'before' | 'after';
  icon?: IconType;
  iconSize?: 'sm' | 'md';
  iconColor?: 'hemelblauw' | 'donkerblauw' | 'lintblauw' | 'wit' | 'zwart' | 'grijs-700';
  iconAriaLabel?: string;
  role?: string;
  noUnderline?: boolean;
  fullContainerLink?: boolean;
  className?: string;
  target?: string;
  children?: React.ReactNode;
  LinkComponent?: LinkCustomLinkComponent;
  asButton?: boolean;
}

export const Link: React.FC<ILinkProps> = ({
  href,
  color,
  weight,
  showIcon,
  icon,
  iconSize,
  iconColor,
  iconAriaLabel,
  noUnderline,
  fullContainerLink,
  className,
  children,
  LinkComponent,
  asButton,
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

  const props: LinkStyleProps = {
    className: clsx(
      'rvo-link',
      className,
      showIcon !== 'no' && ['rvo-link--with-icon'],
      noUnderline && 'rvo-link--no-underline',
      color && `rvo-link--${color}`,
      weight && `rvo-link--${weight}`,
      fullContainerLink && 'rvo-link--full-card-link',
      asButton && 'rvo-link--as-button',
    ),
    ...otherProps,
  };

  const linkContent = (
    <>
      {showIcon === 'before' && iconMarkup}
      <span className="rvo-link__text">{children}</span>
      {showIcon === 'after' && iconMarkup}
    </>
  );

  if (LinkComponent && href) {
    return (
      <LinkComponent href={href} linkProps={props}>
        {linkContent}
      </LinkComponent>
    );
  }

  return (
    <a href={href} {...props}>
      {linkContent}
    </a>
  );
};

export default Link;
