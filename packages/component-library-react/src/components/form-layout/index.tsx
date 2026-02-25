/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */

import React, { ReactNode } from 'react';
import parseContentMarkup from '../../utils/parseContentMarkup';
import '@nl-rvo/css-form-layout/dist/index.css';

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

export const FormLayout: React.FC<IFormLayoutProps & React.HTMLAttributes<HTMLDivElement>> = ({
  content,
  children,
  ...props
}) => {
  return (
    <div className="rvo-form-layout" {...props}>
      {parseContentMarkup(children || content)}
    </div>
  );
};

export default FormLayout;
