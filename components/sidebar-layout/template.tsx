/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
// @ts-ignore
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import '../max-width-layout/index.scss';
import { defaultArgs } from './defaultArgs';
import './index.scss';

export interface ISidebarLayoutProps {
  size?: string;
  sidebarPosition?: 'left' | 'right';
  sidebarBackgroundColor?: boolean;
  sidebarContent?: string;
  content?: string;
  className?: string;
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
};

export const SidebarLayout: React.FC<PropsWithChildren<ISidebarLayoutProps>> = ({
  size = defaultArgs.size,
  sidebarPosition = defaultArgs.sidebarPosition,
  sidebarBackgroundColor = defaultArgs.sidebarBackgroundColor,
  sidebarContent = defaultArgs.sidebarContent,
  content = defaultArgs.content,
  children,
  className,
}: PropsWithChildren<ISidebarLayoutProps>) => {
  let parsedContent = children || content;

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
          {sidebarContent}
        </div>
        <div className="rvo-sidebar-layout__content">{parsedContent}</div>
      </div>
    </main>
  );
};

export default SidebarLayout;
