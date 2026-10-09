/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import { Logo } from '@nl-rvo/react-logo';
import '@nl-rvo/css-header';
import { IHeaderProps } from './Header.types';

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
