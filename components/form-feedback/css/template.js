/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */

export const argTypes = {
  text: { control: 'text' },
  type: {
    options: ['warning', 'error'],
    control: { type: 'radio' },
  },
};

export const defaultArgs = {
  text: 'Dit is een melding.',
  type: 'warning',
};

export const FormFeedback = ({ text = defaultArgs.text, type = defaultArgs.type }) => {
  if (type === 'warning') {
    return `<div class="rvo-form-field__helper-text rvo-form-field__helper-text--warning"><div class="rvo-icon rvo-icon--waarschuwing rvo-status-icon--waarschuwing rvo-icon--md"></div>${text}</div>`;
  } else {
    return `<div class="rvo-form-field__helper-text rvo-form-field__helper-text--error"><div class="rvo-icon rvo-icon--foutmelding rvo-status-icon--foutmelding rvo-icon--md"></div>${text}</div>`;
  }
};
