/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';
import { Checkbox } from './template';

export const argTypes = {
  layout: {
    options: ['vertical', 'horizontal'],
    control: { type: 'radio' },
  },
  invalid: { control: 'boolean' },
};

export const defaultArgs = {
  layout: 'vertical',
  invalid: false,
};

export const CheckboxGroup = ({ layout = defaultArgs.layout, invalid = defaultArgs.invalid }) => {
  let markup = `<div class="${clsx(
    'rvo-checkbox__group',
    layout === 'horizontal' && 'rvo-checkbox__group--horizontal',
    layout === 'vertical' && 'rvo-checkbox__group--vertical',
    invalid && 'rvo-custom-radio-button__group--error',
  )}">`;

  markup += Checkbox({ id: 'optionA', labelText: 'Option A' });
  markup += Checkbox({ id: 'optionB', labelText: 'Option B' });
  markup += Checkbox({ id: 'optionC', labelText: 'Option C' });
  markup += Checkbox({ id: 'optionD', labelText: 'Option D' });
  markup += '</div>';
  return markup;
};
