/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import { defaultArgs } from './defaultArgs';
import { Logo } from '../../packages/components-react/src/Logo';
import './index.scss';

export interface IHeaderProps extends PropsWithChildren {
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
  children,
}: IHeaderProps) => (
  <header className={clsx('rvo-header')}>
    <div className="rvo-header__logo-wrapper">
      {link ? (
        <a href={link} className="rvo-header__logo-link rvo-link rvo-link--no-underline">
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
