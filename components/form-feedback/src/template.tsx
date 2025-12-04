/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { FormFieldDescription } from '@utrecht/component-library-react';
import React, { ReactNode } from 'react';
import './index.scss';
import { defaultArgs } from './defaultArgs';
import { StatusIcon } from '../../status-icon/src/template';
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
      <FormFieldDescription warning className="rvo-form-feedback rvo-form-feedback--warning" {...rootElementProps}>
        <StatusIcon type="waarschuwing" size="md" className="rvo-status-icon-waarschuwing" />
        {parseContentMarkup(children || text)}
      </FormFieldDescription>
    );
  } else {
    return (
      <FormFieldDescription invalid className="rvo-form-feedback rvo-form-feedback--error" {...rootElementProps}>
        <StatusIcon type="foutmelding" size="md" className="rvo-status-icon-foutmelding" />
        {parseContentMarkup(children || text)}
      </FormFieldDescription>
    );
  }
};

export default Feedback;
