/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';

export const argTypes = {
  id: { control: 'text' },
  labelText: { control: 'text' },
  checked: { control: 'boolean' },
  hover: { control: 'boolean' },
  disabled: { control: 'boolean' },
  active: { control: 'boolean' },
  focus: { control: 'boolean' },
  invalid: { control: 'boolean' },
};

export const defaultArgs = {
  id: 'field',
  labelText: 'Label',
  checked: false,
  hover: false,
  disabled: false,
  active: false,
  focus: false,
  invalid: false,
};

export const RadioButton = ({
  id = defaultArgs.id,
  name = 'group',
  labelText = defaultArgs.labelText,
  checked = defaultArgs.checked,
  hover = defaultArgs.hover,
  disabled = defaultArgs.disabled,
  active = defaultArgs.active,
  focus = defaultArgs.focus,
  invalid = defaultArgs.invalid,
}) =>
  `<div class="rvo-custom-radio-button__container"><input id="${id}" name="${name}" autofocus="true" type="radio"${
    checked ? ' checked' : ''
  }
  ${disabled ? ' disabled' : ''} class="${clsx(
    'utrecht-custom-radio-button',
    checked && 'utrecht-custom-radio-button--checked',
    hover && 'rvo-custom-radio-button--hover',
    disabled && 'utrecht-custom-radio-button--disabled',
    active && 'utrecht-custom-radio-button--active',
    focus && 'utrecht-custom-radio-button--focus-visible',
    invalid && 'utrecht-custom-radio-button--invalid',
  )}"><label class='rvo-custom-radio-button__label' for="${id}">${labelText}</label></div>`;

export const RadioButtonGroup = ({ layout = 'vertical' }) => {
  let markup = `<div class="${clsx(
    'rvo-custom-radio-button__group',
    layout === 'horizontal' && 'rvo-custom-radio-button__group--horizontal',
    layout === 'vertical' && 'rvo-custom-radio-button__group--vertical',
  )}">`;
  markup += RadioButton({ id: 'optionA', name: 'group', labelText: 'Option A' });
  markup += RadioButton({ id: 'optionB', name: 'group', labelText: 'Option B' });
  markup += RadioButton({ id: 'optionC', name: 'group', labelText: 'Option C' });
  markup += RadioButton({ id: 'optionD', name: 'group', labelText: 'Option D' });
  markup += '</div>';
  return markup;
};
