/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import '@utrecht/component-library-css';
import React from 'react';
import { Logo } from '../../logo/css/template';

export const argTypes = {
  link: {
    description: 'Logo link',
    control: 'text',
  },
};

export const defaultArgs = {
  link: '/',
};

export const Header = ({ link = defaultArgs.link }) => (
  <header className="rvo-header">
    <div className="rvo-header__logo-wrapper">
      <a href={link} className="rvo-header__logo-link">
        <Logo />
      </a>
    </div>
  </header>
);
