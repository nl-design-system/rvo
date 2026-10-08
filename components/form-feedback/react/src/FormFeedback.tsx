/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import parseContentMarkup from '../../../../packages/component-library-react/src/utils/parseContentMarkup';
import { StatusIcon } from '@nl-rvo/react-status-icon';
import { IFeedbackProps } from './FormFeedback.types';
import '@nl-rvo/css-form-feedback';

export const Feedback: React.FC<IFeedbackProps> = ({ type, children, ...rootElementProps }) => {
  return (
    <div className={`rvo-form-feedback rvo-form-feedback--${type}`} {...rootElementProps}>
      <StatusIcon type="waarschuwing" size="md" className="rvo-status-icon-waarschuwing" />
      {parseContentMarkup(children)}
    </div>
  );
};

export default Feedback;
