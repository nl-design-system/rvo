/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
// @ts-ignore
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import '../max-width-layout/index.scss';
import { defaultArgs } from './defaultArgs';
import './index.scss';
import parseContentMarkup from '../utils/parseContentMarkup';

export interface ISidebarLayoutProps {
  size?: string;
  sidebarPosition?: 'left' | 'right';
  sidebarBackgroundColor?: boolean;
  /** @uxpinignoreprop */
  sidebarContent?: string;
  /** @uxpinignoreprop */
  content?: string;
  /** @uxpinignoreprop */
  className?: string;
  /** @uxpinpropname Sidebar Content */
  sidebarChildren?: ReactNode | undefined;
  /** @uxpinpropname Content */
  children?: ReactNode | undefined;
}

export const argTypes = {
  size: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  sidebarPosition: {
    options: ['left', 'right'],
    control: { type: 'radio' },
  },
  sidebarBackgroundColor: {
    control: 'boolean',
  },
  sidebarContent: {
    control: 'text',
  },
  content: {
    control: 'text',
  },
  sidebarChildren: {
    table: {
      disable: true,
    },
  },
  children: {
    table: {
      disable: true,
    },
  },
};

export const SidebarLayout: React.FC<ISidebarLayoutProps> = ({
  size = defaultArgs.size,
  sidebarPosition = defaultArgs.sidebarPosition,
  sidebarBackgroundColor = defaultArgs.sidebarBackgroundColor,
  sidebarContent = defaultArgs.sidebarContent,
  content = defaultArgs.content,
  children,
  sidebarChildren,
  className,
}: ISidebarLayoutProps) => {
  return (
    <main
      className={clsx(
        sidebarBackgroundColor && 'rvo-sidebar-layout__container',
        sidebarPosition === 'right' && 'rvo-sidebar-layout__container--right',
      )}
    >
      <div
        className={clsx(
          'rvo-sidebar-layout',
          'rvo-max-width-layout',
          `rvo-max-width-layout--${size}`,
          sidebarPosition === 'right' && 'rvo-sidebar-layout--right',
          className,
        )}
      >
        <div
          className={clsx('rvo-sidebar-layout__sidebar', sidebarBackgroundColor && 'rvo-sidebar-layout__sidebar--bg')}
        >
          {parseContentMarkup(sidebarChildren || sidebarContent)}
        </div>
        <div className="rvo-sidebar-layout__content">{parseContentMarkup(children || content)}</div>
      </div>
    </main>
  );
};

export default SidebarLayout;
