/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import '@nl-rvo/css-form-checkbox';
import { ICheckboxProps } from './Checkbox.types';

export const Checkbox: React.FC<ICheckboxProps> = ({
  id,
  name,
  label,
  checked,
  hover,
  disabled,
  active,
  focus,
  indeterminate,
  invalid,
  required,
  helperTextId,
  onChange,
  onUpdateGroup,
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
    )}
    htmlFor={id}
  >
    <input
      id={id}
      name={name}
      className="rvo-checkbox__input"
      type="checkbox"
      checked={checked}
      disabled={disabled}
      required={required}
      onChange={(event) => {
        onChange?.(event);
        onUpdateGroup?.(event);
      }}
      {...otherProps}
      aria-describedby={helperTextId?.length ? helperTextId : undefined}
    />
    {label}
  </label>
);

export default Checkbox;
