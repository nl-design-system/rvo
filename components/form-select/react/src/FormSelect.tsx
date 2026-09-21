/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import '@nl-rvo/css-form-select';
import React from 'react';
import { ISelectProps } from './FormSelect.types';

export const Select: React.FC<ISelectProps> = ({
  id,
  disabled,
  focus,
  invalid,
  required,
  options,
  size = 'md',
  defaultValue,
  value,
  onChange,
  ...otherProps
}: ISelectProps) => (
  <div className={clsx('rvo-select__wrapper', size && size !== 'max' && `rvo-select__wrapper--${size}`)}>
    <select
      id={id}
      aria-invalid={invalid || undefined}
      disabled={disabled || undefined}
      required={required || undefined}
      className={clsx('rvo-select', 'rvo-select--html-select')}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      {...otherProps}
    >
      {options &&
        options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
    </select>
  </div>
);

export default Select;
