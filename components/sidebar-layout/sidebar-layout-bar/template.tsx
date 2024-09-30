/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import '../../max-width-layout/index.scss';
import parseContentMarkup from '../../utils/parseContentMarkup';
import { defaultArgs } from '../defaultArgs';
import '../index.scss';

export interface ISidebarLayoutProps {
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

export const SidebarLayoutBar: React.FC<ISidebarLayoutProps> = ({
  sidebarBackgroundColor = defaultArgs.sidebarBackgroundColor,
  content = defaultArgs.content,
  children,
}: ISidebarLayoutProps) => {
  return (
    <div className={clsx('rvo-sidebar-layout__sidebar', sidebarBackgroundColor && 'rvo-sidebar-layout__sidebar--bg')}>
      {parseContentMarkup(children || content)}
    </div>
  );
};

export default SidebarLayoutBar;
