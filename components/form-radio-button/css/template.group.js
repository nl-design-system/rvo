/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';
import { RadioButton } from './template';

export const argTypes = {
  layout: {
    options: ['vertical', 'horizontal'],
    control: { type: 'radio' },
  },
  name: { control: 'text' },
  invalid: { control: 'boolean' },
};

export const defaultArgs = {
  layout: 'vertical',
  name: 'group',
  invalid: false,
};

export const RadioButtonGroup = ({
  layout = defaultArgs.layout,
  name = defaultArgs.name,
  invalid = defaultArgs.invalid,
}) => {
  let markup = `<div class="${clsx(
    'rvo-custom-radio-button__group',
    layout === 'horizontal' && 'rvo-custom-radio-button__group--horizontal',
    layout === 'vertical' && 'rvo-custom-radio-button__group--vertical',
    invalid && 'rvo-custom-radio-button__group--error',
  )}">`;
  markup += RadioButton({ id: 'optionA', name, labelText: 'Option A' });
  markup += RadioButton({ id: 'optionB', name, labelText: 'Option B' });
  markup += RadioButton({ id: 'optionC', name, labelText: 'Option C' });
  markup += RadioButton({ id: 'optionD', name, labelText: 'Option D' });
  markup += '</div>';
  return markup;
};
