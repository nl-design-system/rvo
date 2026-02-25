/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import { Logo } from '../logo';
import '@nl-rvo/css-header/dist/index.css';

export interface IHeaderProps {
  title?: string;
  subtitle?: string;
  /** @uxpinignoreprop */
  link?: string;
  children?: ReactNode | undefined;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
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
  children: {
    table: {
      disable: true,
    },
  },
  onClick: {
    table: {
      disable: true,
    },
  },
};

export const Header: React.FC<IHeaderProps & React.HTMLAttributes<HTMLDivElement>> = ({
  link = defaultArgs.link,
  title = defaultArgs.title,
  subtitle = defaultArgs.subtitle,
  children,
  onClick,
  ...rootElementProps
}) => (
  <header className={clsx('rvo-header')} {...rootElementProps}>
    <div className="rvo-header__logo-wrapper" onClick={onClick}>
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
