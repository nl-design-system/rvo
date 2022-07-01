/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';
import { Checkbox } from './template';

const defaultOptions = [
  { id: 'optionA', labelText: 'Option A' },
  { id: 'optionB', labelText: 'Option B', checked: true },
  { id: 'optionC', labelText: 'Option C' },
  { id: 'optionD', labelText: 'Option D' },
];

export const argTypes = {
  layout: {
    options: ['vertical', 'horizontal'],
    control: { type: 'radio' },
  },
  invalid: { control: 'boolean' },
  options: {
    type: {
      name: 'array',
      required: true,
    },
  },
};

export const defaultArgs = {
  layout: 'vertical',
  invalid: false,
  options: defaultOptions,
};

export const CheckboxGroup = ({
  layout = defaultArgs.layout,
  invalid = defaultArgs.invalid,
  options = defaultArgs.options,
}) => {
  let markup = `<div class="${clsx(
    'rvo-checkbox__group',
    layout === 'horizontal' && 'rvo-checkbox__group--horizontal',
    layout === 'vertical' && 'rvo-checkbox__group--vertical',
    invalid && 'rvo-custom-radio-button__group--error',
  )}">`;

  options.forEach((option) => {
    markup += Checkbox({ id: option.id, name, labelText: option.labelText, checked: option.checked });
  });

  markup += '</div>';
  return markup;
};
