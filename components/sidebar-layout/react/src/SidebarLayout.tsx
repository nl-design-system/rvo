/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import '@nl-rvo/css-max-width-layout';
import '@nl-rvo/css-sidebar-layout';
import parseContentMarkup from '@nl-rvo/component-library-react/src/utils/parseContentMarkup';
import { ISidebarBarProps, ISidebarLayoutContentProps, ISidebarLayoutProps } from './SidebarLayout.types';

export const SidebarLayout: React.FC<ISidebarLayoutProps> & {
  Bar: React.FC<ISidebarBarProps>;
  Content: React.FC<ISidebarLayoutContentProps>;
} = ({
  maxWidthLayoutSize = 'md',
  sidebarPosition = 'left',
  sidebarBackgroundColor = true,
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
      <SidebarLayout.Bar backgroundColor={sidebarBackgroundColor} />
      <SidebarLayout.Content />
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
