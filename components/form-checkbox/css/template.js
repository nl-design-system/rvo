/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';

export const argTypes = {
  id: { control: 'text' },
  name: { control: 'text' },
  labelText: { control: 'text' },
  checked: { control: 'boolean' },
  hover: { control: 'boolean' },
  disabled: { control: 'boolean' },
  active: { control: 'boolean' },
  focus: { control: 'boolean' },
  indeterminate: { control: 'boolean' },
  invalid: { control: 'boolean' },
  required: { control: 'boolean' },
  value: { control: 'text' },
};

export const defaultArgs = {
  id: 'field',
  name: 'group',
  labelText: 'Label',
  checked: false,
  hover: false,
  disabled: false,
  active: false,
  focus: false,
  indeterminate: false,
  invalid: false,
  required: false,
  value: '',
};

export const Checkbox = ({
  id = defaultArgs.id,
  name = defaultArgs.name,
  labelText = defaultArgs.labelText,
  checked = defaultArgs.checked,
  hover = defaultArgs.hover,
  disabled = defaultArgs.disabled,
  active = defaultArgs.active,
  focus = defaultArgs.focus,
  indeterminate = defaultArgs.indeterminate,
  invalid = defaultArgs.invalid,
  required = defaultArgs.required,
  value = defaultArgs.value,
}) =>
  `<label class="${clsx(
    'rvo-checkbox',
    active && 'rvo-checkbox--active',
    hover && 'rvo-checkbox--hover',
    checked && 'rvo-checkbox--checked',
    !checked && 'rvo-checkbox--not-checked',
    disabled && 'rvo-checkbox--disabled',
    focus && 'rvo-checkbox--focus-visible',
    invalid && 'rvo-checkbox--invalid',
    indeterminate && 'rvo-checkbox--indeterminate',
    required && 'rvo-checkbox--required',
  )}" for="${id}">
  <input id="${id}" name="${name}" class="rvo-checkbox__input" type="checkbox"${checked ? ' checked' : ''}${
    disabled ? ' disabled' : ''
  }${required ? ' required' : ''}${value ? ` value="${value}"` : ''} class="rvo-checkbox__input"/>${labelText}</label>`;
