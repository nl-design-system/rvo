/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React, { ReactNode } from 'react';
import '@nl-rvo/component-library-css/dist/components/max-width-layout.css';
import parseContentMarkup from '../../../utils/parseContentMarkup';
import { defaultArgs } from '../defaultArgs';
import '@nl-rvo/component-library-css/dist/components/sidebar-layout.css';

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
