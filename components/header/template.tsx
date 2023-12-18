/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import { Logo } from '../logo/template';
import { defaultArgs } from './defaultArgs';
import './index.scss';

export interface IHeaderProps extends PropsWithChildren {
  title?: string;
  subtitle?: string;
  link?: string;
  showHorizontalRule?: boolean;
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
  showHorizontalRule: {
    control: 'boolean',
  },
};

export const Header: React.FC<IHeaderProps> = ({
  link = defaultArgs.link,
  title = defaultArgs.title,
  subtitle = defaultArgs.subtitle,
  showHorizontalRule = defaultArgs.showHorizontalRule,
  children,
}: IHeaderProps) => (
  <header className={clsx('rvo-header', showHorizontalRule && 'rvo-header--rule')}>
    <div className="rvo-header__logo-wrapper">
      {link ? (
        <a href={link} className="rvo-header__logo-link">
          <Logo className="rvo-header__logo-img" title={title} subtitle={subtitle} />
        </a>
      ) : (
        <Logo className="rvo-header__logo-img" title={title} subtitle={subtitle} />
      )}
    </div>
    {children}
  </header>
);

export default Header;
