/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */

import React, { HTMLAttributes, ReactNode } from 'react';
import parseContentMarkup from '../utils/parseContentMarkup';
import './index.scss';

export interface IFormLayoutProps extends HTMLAttributes<HTMLDivElement> {
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

export const FormLayout: React.FC<IFormLayoutProps> = ({ content, children, ...props }: IFormLayoutProps) => {
  return (
    <div className="rvo-form-layout" {...props}>
      {parseContentMarkup(children || content)}
    </div>
  );
};

export default FormLayout;
