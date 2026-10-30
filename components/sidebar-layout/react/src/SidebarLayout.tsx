/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import '@nl-rvo/css-max-width-layout/max-width-layout.css';
import '@nl-rvo/css-sidebar-layout/sidebar-layout.css';
import parseContentMarkup from '@nl-rvo/component-library-react/src/utils/parseContentMarkup';
import { ISidebarBarProps, ISidebarLayoutContentProps, ISidebarLayoutProps } from './SidebarLayout.types';

export const SidebarLayout: React.FC<ISidebarLayoutProps> & {
  Bar: React.FC<ISidebarBarProps>;
  Content: React.FC<ISidebarLayoutContentProps>;
} = ({
  sidebarPosition = 'left',
  sidebarBackgroundColor = true,
  sidebarContent,
  children,
  className,
  ...rootElementProps
}) => {
  return (
    <main
      className={clsx(
        'rvo-sidebar-layout',
        'rvo-sidebar-layout__container',
        sidebarPosition && [
          `rvo-sidebar-layout--${sidebarPosition}`,
          `rvo-sidebar-layout__container--${sidebarPosition}`,
        ],
        className,
      )}
      {...rootElementProps}
    >
      <SidebarLayout.Bar backgroundColor={sidebarBackgroundColor}>{sidebarContent}</SidebarLayout.Bar>
      <SidebarLayout.Content>{children}</SidebarLayout.Content>
    </main>
  );
};

const SidebarLayoutBar: React.FC<ISidebarBarProps> = ({ backgroundColor, children, ...props }: ISidebarBarProps) => {
  return (
    <div
      className={clsx('rvo-sidebar-layout__sidebar', backgroundColor && 'rvo-sidebar-layout__sidebar--bg')}
      {...props}
    >
      {parseContentMarkup(children)}
    </div>
  );
};

const SidebarLayoutContent: React.FC<ISidebarLayoutContentProps> = ({
  children,
  ...props
}: ISidebarLayoutContentProps) => {
  return (
    <div className="rvo-sidebar-layout__content" {...props}>
      {parseContentMarkup(children)}
    </div>
  );
};

SidebarLayout.Bar = SidebarLayoutBar;
SidebarLayout.Content = SidebarLayoutContent;

export default SidebarLayout;
