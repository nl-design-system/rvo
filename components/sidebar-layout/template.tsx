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
import SidebarLayoutBar from './sidebar-layout-bar/template';
import SidebarLayoutContent from './sidebar-layout-content/template';
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
  /** @uxpinignoreprop */
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
        {children ? (
          children
        ) : (
          <>
            <SidebarLayoutBar>{parseContentMarkup(sidebarContent)}</SidebarLayoutBar>
            <SidebarLayoutContent>{parseContentMarkup(content)}</SidebarLayoutContent>
          </>
        )}
      </div>
    </main>
  );
};

export default SidebarLayout;
