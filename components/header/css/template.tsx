/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import '@utrecht/component-library-css';
import React from 'react';
import { Logo } from '../../logo/css/template';

interface IHeaderProps {
  link?: string;
}

export const argTypes = {
  link: {
    description: 'Logo link',
    control: 'text',
  },
};

export const defaultArgs: IHeaderProps = {
  link: '/',
};

export const Header: React.FC<IHeaderProps> = ({ link = defaultArgs.link }) => (
  <header className="rvo-header">
    <div className="rvo-header__logo-wrapper">
      {link ? (
        <a href={link} className="rvo-header__logo-link">
          <Logo className="rvo-header__logo-img" />
        </a>
      ) : (
        <Logo className="rvo-header__logo-img" />
      )}
    </div>
  </header>
);
