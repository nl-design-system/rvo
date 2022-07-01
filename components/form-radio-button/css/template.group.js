/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';
import { RadioButton } from './template';

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
  name: { control: 'text' },
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
  name: 'group',
  invalid: false,
  options: defaultOptions,
};

export const RadioButtonGroup = ({
  layout = defaultArgs.layout,
  name = defaultArgs.name,
  invalid = defaultArgs.invalid,
  options = defaultArgs.options,
}) => {
  let markup = `<div class="${clsx(
    'rvo-custom-radio-button__group',
    layout === 'horizontal' && 'rvo-custom-radio-button__group--horizontal',
    layout === 'vertical' && 'rvo-custom-radio-button__group--vertical',
    invalid && 'rvo-custom-radio-button__group--error',
  )}">`;

  options.forEach((option) => {
    markup += RadioButton({ id: option.id, name, labelText: option.labelText, checked: option.checked });
  });

  markup += '</div>';
  return markup;
};
