/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import '@nl-rvo/assets/images/logo.svg';

export const argTypes = {
  legend: {
    control: 'text',
  },
  content: {
    control: 'text',
  },
};

export const defaultArgs = {
  legend: 'Fieldset legend',
  content: 'Fieldset content',
};

export const Fieldset = ({ content = defaultArgs.content, legend = defaultArgs.legend }) =>
  `<fieldset class="utrecht-form-fieldset">
  ${
    legend
      ? `<legend class="utrecht-form-fieldset__legend utrecht-form-fieldset__legend--distanced">${legend}</legend>`
      : ''
  }
  ${content}
</fieldset>`;
