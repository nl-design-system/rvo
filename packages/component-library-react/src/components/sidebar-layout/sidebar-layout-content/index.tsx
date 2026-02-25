/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React, { ReactNode } from 'react';
import '../../../max-width-layout/src/index.scss';
import parseContentMarkup from '../../../utils/parseContentMarkup';
import { defaultArgs } from '../defaultArgs';
import '@nl-rvo/css-sidebar-layout/dist/index.css';

export interface ISidebarLayoutProps {
  /** @uxpinignoreprop */
  content?: string;
  /** @uxpinpropname Content */
  children?: ReactNode | undefined;
}

export const SidebarLayoutContent: React.FC<ISidebarLayoutProps> = ({
  content = defaultArgs.content,
  children,
  ...props
}: ISidebarLayoutProps) => {
  return (
    <div className="rvo-sidebar-layout__content" {...props}>
      {parseContentMarkup(children || content)}
    </div>
  );
};

export default SidebarLayoutContent;
