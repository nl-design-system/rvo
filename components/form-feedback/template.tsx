/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { FormFieldDescription } from '@utrecht/component-library-react';
import React, { ReactNode } from 'react';
import './index.scss';
import { defaultArgs } from './defaultArgs';
import { StatusIcon } from '../status-icon/template';
import parseContentMarkup from '../utils/parseContentMarkup';

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

export const Feedback: React.FC<IFeedbackProps> = ({
  text = defaultArgs.text,
  type = defaultArgs.type,
  children,
}: IFeedbackProps) => {
  if (type === 'warning') {
    return (
      <FormFieldDescription warning className="rvo-form-feedback rvo-form-feedback--warning">
        <StatusIcon type="waarschuwing" size="md" className="rvo-status-icon-waarschuwing" />
        {parseContentMarkup(children || text)}
      </FormFieldDescription>
    );
  } else {
    return (
      <FormFieldDescription invalid className="rvo-form-feedback rvo-form-feedback--error">
        <StatusIcon type="foutmelding" size="md" className="rvo-status-icon-foutmelding" />
        {parseContentMarkup(children || text)}
      </FormFieldDescription>
    );
  }
};

export default Feedback;
