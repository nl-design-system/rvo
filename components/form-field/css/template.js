/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { ExpandableText } from '../../expandable-text/css/template';
import { FormFeedback } from '../../form-feedback/css/template';

export const argTypes = {
  fieldId: {
    control: 'text',
  },
  labelText: {
    control: 'text',
  },
  helperText: { control: 'text' },
  expandableHelperText: { control: 'boolean' },
  expandableHelperTextTitle: { control: 'text' },
  warningText: { control: 'text' },
  errorText: { control: 'text' },
};

export const defaultArgs = {
  fieldId: 'fieldId',
  labelText: 'Field label',
  helperText: 'Helper text',
  expandableHelperText: false,
  expandableHelperTextTitle: 'Expandable helper text title',
  warningText: '',
  errorText: '',
};

export const Field = ({
  fieldId = defaultArgs.fieldId,
  labelText = defaultArgs.labelText,
  helperText = defaultArgs.helperText,
  expandableHelperText = defaultArgs.expandableHelperText,
  expandableHelperTextTitle = defaultArgs.expandableHelperTextTitle,
  warningText = defaultArgs.warningText,
  errorText = defaultArgs.errorText,
  formControlMarkup = '',
}) => {
  // Parse helper text markup
  let helperTextMarkup = '';
  if (helperText && helperText.length) {
    if (!expandableHelperText) {
      helperTextMarkup = `<div class="rvo-form-field__helper-text">${helperText}</div>`;
    } else {
      helperTextMarkup = `<div class="rvo-form-field__helper-text">${ExpandableText({
        title: expandableHelperTextTitle,
        text: helperText,
      })}</div>`;
    }
  }

  // Parse error text markup
  let errorTextMarkup = '';
  if (errorText) {
    errorTextMarkup = FormFeedback({ text: errorText, type: 'error' });
  }

  // Parse warning text markup
  let warningTextMarkup = '';
  if (warningText) {
    warningTextMarkup = FormFeedback({ text: warningText, type: 'warning' });
  }

  return `<div class="rvo-form-field">
  <label class="rvo-form-field__label" for="${fieldId}"><span class="rvo-form-field__label-text">${labelText}</span>${helperTextMarkup}${errorTextMarkup}${warningTextMarkup}</label>
  ${formControlMarkup}</div>`;
};
