/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import '@nl-rvo/css-max-width-layout/dist/index.css';
import parseContentMarkup from '../../../utils/parseContentMarkup';
import { defaultArgs } from '../defaultArgs';
import '@nl-rvo/css-sidebar-layout/dist/index.css';

export interface ISidebarLayoutProps {
  backgroundColor?: boolean;
  /** @uxpinignoreprop */
  content?: string;
  /** @uxpinpropname Content */
  children?: ReactNode | undefined;
}

export const SidebarLayoutBar: React.FC<ISidebarLayoutProps> = ({
  backgroundColor = defaultArgs.sidebarBackgroundColor,
  content = defaultArgs.content,
  children,
  ...props
}: ISidebarLayoutProps) => {
  return (
    <div
      className={clsx('rvo-sidebar-layout__sidebar', backgroundColor && 'rvo-sidebar-layout__sidebar--bg')}
      {...props}
    >
      {parseContentMarkup(children || content)}
    </div>
  );
};

export default SidebarLayoutBar;
