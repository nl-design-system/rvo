/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */

import React from 'react';
import parseContentMarkup from '@nl-rvo/component-library-react/src/utils/parseContentMarkup';
import '@nl-rvo/css-form-layout';
import { IFormLayoutProps } from './FormLayout.types';

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
