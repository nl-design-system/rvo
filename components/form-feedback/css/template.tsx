/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import './index.scss';

interface IFeedbackProps {
  text: string;
  type: string;
}

export const argTypes = {
  text: { control: 'text' },
  type: {
    options: ['warning', 'error'],
    control: { type: 'radio' },
  },
};

export const defaultArgs: IFeedbackProps = {
  text: 'Dit is een melding.',
  type: 'warning',
};

export const FormFeedback: React.FC<IFeedbackProps> = ({ text = defaultArgs.text, type = defaultArgs.type }) => {
  if (type === 'warning') {
    return (
      <div className="rvo-form-feedback rvo-form-feedback--warning rvo-layout-row rvo-layout-gap--sm">
        <div className="rvo-icon rvo-icon-waarschuwing rvo-status-icon-waarschuwing rvo-icon--md"></div>
        {text}
      </div>
    );
  } else {
    return (
      <div className="rvo-form-feedback rvo-form-feedback--error rvo-layout-row rvo-layout-gap--sm">
        <div className="rvo-icon rvo-icon-foutmelding rvo-status-icon-foutmelding rvo-icon--md"></div>
        {text}
      </div>
    );
  }
};
