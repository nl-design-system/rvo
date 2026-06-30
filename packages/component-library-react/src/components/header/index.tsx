/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Logo } from '../logo';
import '@nl-rvo/component-library-css/dist/components/header.css';

export interface IHeaderProps {
  title?: string;
  subtitle?: string;
  link?: string;
  children?: ReactNode | undefined;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Header: React.FC<IHeaderProps & React.HTMLAttributes<HTMLDivElement>> = ({
  title = 'Rijksdienst voor Ondernemend Nederland',
  subtitle = '',
  link,
  children,
  onClick,
  ...rootElementProps
}) => (
  <header className={clsx('rvo-header')} {...rootElementProps}>
    <div className="rvo-header__logo-wrapper" onClick={onClick}>
      <Logo className="rvo-header__logo-img" title={title} subtitle={subtitle} link={link} />
    </div>
    {children}
  </header>
);

export default Header;
