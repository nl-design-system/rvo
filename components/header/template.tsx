/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { Logo } from '../logo/template';
import { defaultArgs } from './defaultArgs';
import './index.scss';

export interface IHeaderProps {
  title?: string;
  subtitle?: string;
  link?: string;
}

export const argTypes = {
  title: {
    control: 'text',
  },
  subtitle: {
    control: 'text',
  },
  link: {
    control: 'text',
  },
};

export const Header: React.FC<IHeaderProps> = ({
  link = defaultArgs.link,
  title = defaultArgs.title,
  subtitle = defaultArgs.subtitle,
}: IHeaderProps) => (
  <header className="rvo-header">
    <div className="rvo-header__logo-wrapper">
      {link ? (
        <a href={link} className="rvo-header__logo-link">
          <Logo className="rvo-header__logo-img" title={title} subtitle={subtitle} />
        </a>
      ) : (
        <Logo className="rvo-header__logo-img" title={title} subtitle={subtitle} />
      )}
    </div>
  </header>
);

export default Header;
