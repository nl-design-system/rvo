/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */

import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import { Heading } from '../../heading/template';
import parseContentMarkup from '../../utils/parseContentMarkup';

export interface IFooterColumnProps {
  label?: string;
  /** @uxpinpropname Footer items */
  children?: ReactNode;
}

export const FooterColumn: React.FC<IFooterColumnProps> = ({
  label = defaultArgs.label,
  children,
}: IFooterColumnProps) => {
  return (
    <div className="rvo-footer-column">
      {label?.length > 0 && (
        <Heading type="h3" textContent={parseContentMarkup(label)} className="rvo-footer-menu-title" />
      )}
      <ul className="rvo-footer-menu">{children}</ul>
    </div>
  );
};

export default FooterColumn;
