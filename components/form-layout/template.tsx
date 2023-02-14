/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */

import React, { PropsWithChildren } from 'react';
import parseContentMarkup from '../utils/parseContentMarkup';
import './index.scss';

export interface IFormLayoutProps {
  content: string;
}

export const argTypes = {
  content: {
    control: 'text',
  },
};

export const FormLayout: React.FC<PropsWithChildren<IFormLayoutProps>> = ({
  content,
  children,
}: PropsWithChildren<IFormLayoutProps>) => {
  return <div className="rvo-form-layout">{children || parseContentMarkup(content)}</div>;
};

export default FormLayout;
