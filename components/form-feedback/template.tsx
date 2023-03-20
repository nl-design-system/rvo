/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { FormFieldDescription } from '@utrecht/component-library-react';
import React from 'react';
import './index.scss';
import { Icon } from '../icon/template';
import { defaultArgs } from './defaultArgs';

export interface IFeedbackProps {
  text: string;
  type: 'warning' | 'error';
}

export const argTypes = {
  text: { control: 'text' },
  type: {
    options: ['warning', 'error'],
    control: { type: 'radio' },
  },
};

export const Feedback: React.FC<IFeedbackProps> = ({
  text = defaultArgs.text,
  type = defaultArgs.type,
}: IFeedbackProps) => {
  if (type === 'warning') {
    return (
      <FormFieldDescription warning className="rvo-form-feedback rvo-form-feedback--warning">
        <Icon icon="waarschuwing" size="md" className="rvo-status-icon-waarschuwing" />
        {text}
      </FormFieldDescription>
    );
  } else {
    return (
      <FormFieldDescription invalid className="rvo-form-feedback rvo-form-feedback--error">
        <Icon icon="foutmelding" size="md" className="rvo-status-icon-foutmelding" />
        {text}
      </FormFieldDescription>
    );
  }
};

export default Feedback;