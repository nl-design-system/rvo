/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import { defaultArgs } from './defaultArgs';
import './index.scss';

export interface ICheckboxProps {
  id?: string;
  name?: string;
  label: string;
  checked?: boolean;
  hover?: boolean;
  disabled?: boolean;
  active?: boolean;
  focus?: boolean;
  indeterminate?: boolean;
  invalid?: boolean;
  required?: boolean;
  value?: string;
  onFocus?: (event) => void;
  onBlur?: (event) => void;
  onChange?: (event) => void;
  onClick?: (event) => void;
  onInvalid?: (event) => void;
}

export const argTypes = {
  id: { control: 'text' },
  name: { control: 'text' },
  label: { control: 'text' },
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

export const Checkbox: React.FC<ICheckboxProps> = ({
  id = defaultArgs.id,
  name = defaultArgs.name,
  label = defaultArgs.label,
  checked = defaultArgs.checked,
  hover = defaultArgs.hover,
  disabled = defaultArgs.disabled,
  active = defaultArgs.active,
  focus = defaultArgs.focus,
  indeterminate = defaultArgs.indeterminate,
  invalid = defaultArgs.invalid,
  required = defaultArgs.required,
  value = defaultArgs.value,
  ...otherProps
}: ICheckboxProps) => (
  <label
    className={clsx(
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
      'rvo-layout-row',
      'rvo-layout-gap--sm',
    )}
    htmlFor={id}
  >
    <input
      id={id}
      name={name}
      className="rvo-checkbox__input"
      type="checkbox"
      defaultChecked={checked || null}
      disabled={disabled || null}
      required={required || null}
      defaultValue={value || ''}
      {...otherProps}
    />
    {label}
  </label>
);

export default Checkbox;
