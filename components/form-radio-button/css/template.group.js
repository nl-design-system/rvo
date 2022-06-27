/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';
import { FormFeedback } from '../../form-feedback/css/template';
import { RadioButton } from './template';

export const argTypes = {
  layout: {
    options: ['vertical', 'horizontal'],
    control: { type: 'radio' },
  },
  warningText: { control: 'text' },
  errorText: { control: 'text' },
};

export const defaultArgs = {
  layout: 'vertical',
  legend: '',
  warningText: '',
  errorText: '',
};

export const RadioButtonGroup = ({
  layout = defaultArgs.layout,
  warningText = defaultArgs.warningText,
  errorText = defaultArgs.errorText,
}) => {
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

  let markup = `<div class="${clsx(
    'rvo-custom-radio-button__group',
    layout === 'horizontal' && 'rvo-custom-radio-button__group--horizontal',
    layout === 'vertical' && 'rvo-custom-radio-button__group--vertical',
    warningText.length && 'rvo-custom-radio-button__group--warning',
    errorText.length && 'rvo-custom-radio-button__group--error',
  )}">`;
  markup += errorTextMarkup;
  markup += warningTextMarkup;
  markup += RadioButton({ id: 'optionA', name: 'group', labelText: 'Option A' });
  markup += RadioButton({ id: 'optionB', name: 'group', labelText: 'Option B' });
  markup += RadioButton({ id: 'optionC', name: 'group', labelText: 'Option C' });
  markup += RadioButton({ id: 'optionD', name: 'group', labelText: 'Option D' });
  markup += '</div>';
  return markup;
};
