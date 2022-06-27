/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import { FormFeedback } from '../../form-feedback/css/template';
import './index.scss';
import { Checkbox } from './template';

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
  warningText: '',
  errorText: '',
};

export const CheckboxGroup = ({
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
    'rvo-checkbox__group',
    layout === 'horizontal' && 'rvo-checkbox__group--horizontal',
    layout === 'vertical' && 'rvo-checkbox__group--vertical',
    warningText.length && 'rvo-custom-radio-button__group--warning',
    errorText.length && 'rvo-custom-radio-button__group--error',
  )}">`;
  markup += errorTextMarkup;
  markup += warningTextMarkup;
  markup += Checkbox({ id: 'optionA', labelText: 'Option A' });
  markup += Checkbox({ id: 'optionB', labelText: 'Option B' });
  markup += Checkbox({ id: 'optionC', labelText: 'Option C' });
  markup += Checkbox({ id: 'optionD', labelText: 'Option D' });
  markup += '</div>';
  return markup;
};
