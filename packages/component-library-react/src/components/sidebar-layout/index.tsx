/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
// @ts-ignore
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import '@nl-rvo/component-library-css/dist/components/max-width-layout.css';
import { defaultArgs } from './defaultArgs';
import '@nl-rvo/component-library-css/dist/components/sidebar-layout.css';
import SidebarLayoutBar from './sidebar-layout-bar';
import SidebarLayoutContent from './sidebar-layout-content';
import parseContentMarkup from '../../utils/parseContentMarkup';

export interface ISidebarLayoutProps {
  maxWidthLayoutSize?: 'sm' | 'md' | 'lg';
  sidebarPosition?: 'left' | 'right';
  /** @uxpinignoreprop */
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

export const SidebarLayout: React.FC<ISidebarLayoutProps & React.HTMLAttributes<HTMLElement>> = ({
  maxWidthLayoutSize = defaultArgs.maxWidthLayoutSize,
  sidebarPosition = defaultArgs.sidebarPosition,
  sidebarBackgroundColor = defaultArgs.sidebarBackgroundColor,
  sidebarContent = defaultArgs.sidebarContent,
  content = defaultArgs.content,
  children,
  className,
  ...rootElementProps
}) => {
  return (
    <main
      className={clsx(
        'rvo-sidebar-layout__container',
        sidebarPosition === 'right' && 'rvo-sidebar-layout__container--right',
        className,
      )}
      {...rootElementProps}
    >
      <div
        className={clsx(
          'rvo-sidebar-layout',
          'rvo-max-width-layout',
          `rvo-max-width-layout--${maxWidthLayoutSize}`,
          sidebarPosition === 'right' && 'rvo-sidebar-layout--right',
          className,
        )}
      >
        {children || (
          <>
            <SidebarLayoutBar backgroundColor={sidebarBackgroundColor}>
              {parseContentMarkup(sidebarContent)}
            </SidebarLayoutBar>
            <SidebarLayoutContent>{parseContentMarkup(content)}</SidebarLayoutContent>
          </>
        )}
      </div>
    </main>
  );
};

export default SidebarLayout;
