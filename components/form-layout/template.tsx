/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */

import React, { ReactNode } from 'react';
import parseContentMarkup from '../utils/parseContentMarkup';
import './index.scss';

export interface IFormLayoutProps {
  /** @uxpinignoreprop */
  content: string;
  /** @uxpinpropname Content */
  children?: ReactNode | undefined;
}

export const argTypes = {
  content: {
    control: 'text',
  },
  children: {
    table: {
      disable: true,
    },
  },
};

export const FormLayout: React.FC<IFormLayoutProps> = ({ content, children }: IFormLayoutProps) => {
  return <div className="rvo-form-layout">{parseContentMarkup(children || content)}</div>;
};

export default FormLayout;
