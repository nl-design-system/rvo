/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import parseContentMarkup from '../../../../packages/component-library-react/src/utils/parseContentMarkup';
import { StatusIcon } from '@nl-rvo/react-status-icon';
import { IFeedbackProps } from './FormFeedback.types';
import '@nl-rvo/css-form-feedback';

export const Feedback: React.FC<IFeedbackProps> = ({ text, type, children, ...rootElementProps }) => {
  if (type === 'warning') {
    return (
      <div className="rvo-form-feedback rvo-form-feedback--warning" {...rootElementProps}>
        <StatusIcon type="waarschuwing" size="md" className="rvo-status-icon-waarschuwing" />
        {parseContentMarkup(children || text)}
      </div>
    );
  } else {
    return (
      <div className="rvo-form-feedback rvo-form-feedback--error" {...rootElementProps}>
        <StatusIcon type="foutmelding" size="md" className="rvo-status-icon-foutmelding" />
        {parseContentMarkup(children || text)}
      </div>
    );
  }
};

export default Feedback;
