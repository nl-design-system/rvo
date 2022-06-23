/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';

export const argTypes = {
  id: { control: 'text' },
  labelText: { control: 'text' },
  checked: {
    control: 'boolean',
  },
  disabled: {
    control: 'boolean',
  },
  active: {
    control: 'boolean',
  },
  focus: {
    control: 'boolean',
  },
  invalid: {
    control: 'boolean',
  },
};

export const defaultArgs = {
  id: 'field',
  labelText: 'Label',
  checked: false,
  disabled: false,
  active: false,
  focus: false,
  invalid: false,
};

export const RadioButton = ({
  id = defaultArgs.id,
  labelText = defaultArgs.labelText,
  checked = defaultArgs.checked,
  disabled = defaultArgs.disabled,
  active = defaultArgs.active,
  focus = defaultArgs.focus,
  invalid = defaultArgs.invalid,
}) =>
  `<input id=${id} autofocus="true" type="radio"${checked ? ' checked' : ''}
  ${disabled ? ' disabled' : ''} class="${clsx(
    'utrecht-custom-radio-button',
    checked && 'utrecht-custom-radio-button--checked',
    disabled && 'utrecht-custom-radio-button--disabled',
    active && 'utrecht-custom-radio-button--active',
    focus && 'utrecht-custom-radio-button--focus',
    invalid && 'utrecht-custom-radio-button--invalid',
  )}"><label class='rvo-custom-radio-button__label' for="${id}">${labelText}</label>`;
