/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React, { ReactNode } from 'react';
import '@nl-rvo/css-form-feedback/dist/index.css';
import { defaultArgs } from './defaultArgs';
import { StatusIcon } from '../status-icon';
import parseContentMarkup from '../../utils/parseContentMarkup';

export interface IFeedbackProps {
  /** @uxpinignoreprop */
  text: string;
  type: 'warning' | 'error';
  /** @uxpinpropname Content */
  children?: ReactNode | undefined;
}

export const argTypes = {
  text: { control: 'text' },
  type: {
    options: ['warning', 'error'],
    control: { type: 'radio' },
  },
  children: {
    table: {
      disable: true,
    },
  },
};

export const Feedback: React.FC<IFeedbackProps & React.HTMLAttributes<HTMLDivElement>> = ({
  text = defaultArgs.text,
  type = defaultArgs.type,
  children,
  ...rootElementProps
}) => {
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
