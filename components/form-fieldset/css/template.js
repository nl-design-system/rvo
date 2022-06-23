/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { Field } from '../../form-field/css/template';

export const argTypes = {
  legend: {
    control: 'text',
  },
  disabled: {
    control: 'boolean',
  },
};

export const defaultArgs = {
  legend: 'Fieldset legend',
  disabled: false,
};

export const Fieldset = ({ legend = defaultArgs.legend, disabled = defaultArgs.disabled, withFields = false }) => {
  // Parse fieldset content
  let fieldsetContent = 'Fields';
  if (withFields) {
    fieldsetContent = Field({ fieldId: 'fieldA', labelText: 'Field', helperText: '' });
    fieldsetContent += Field({
      fieldId: 'fieldB',
      labelText: 'Field met helper tekst',
      helperText: 'Deze helpertekst kan gebruikt worden voor instructies',
    });
    fieldsetContent += Field({
      fieldId: 'fieldC',
      labelText: 'Field met waarschuwing',
      warningText: 'Dit is een waarschuwing',
    });
    fieldsetContent += Field({
      fieldId: 'fieldD',
      labelText: 'Field met foutmelding',
      errorText: 'Dit is een foutmelding',
    });
  }

  return `<fieldset class="utrecht-form-fieldset"${disabled ? ' disabled' : ''}>
  ${
    legend
      ? `<legend class="utrecht-form-fieldset__legend utrecht-form-fieldset__legend--distanced">${legend}</legend>`
      : ''
  }
  ${fieldsetContent}
</fieldset>`;
};
