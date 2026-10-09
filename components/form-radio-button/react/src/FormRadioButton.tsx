/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import '@nl-rvo/css-form-radio-button';
import { IRadioButtonProps } from './FormRadioButton.types';

export const RadioButton: React.FC<IRadioButtonProps> = ({
  id,
  name,
  label,
  checked,
  hover,
  disabled,
  active,
  focus,
  invalid,
  required,
  onChange,
  onUpdateGroup,
  ...otherProps
}: IRadioButtonProps) => (
  <label className="rvo-radio-button" htmlFor={id}>
    <input
      id={id}
      name={name}
      type="radio"
      checked={checked || undefined}
      disabled={disabled || undefined}
      required={required || undefined}
      className={clsx(
        'utrecht-radio-button',
        checked && 'utrecht-radio-button--checked',
        hover && 'rvo-radio-button--hover',
        disabled && 'utrecht-radio-button--disabled',
        active && 'utrecht-radio-button--active',
        focus && 'utrecht-radio-button--focus-visible',
        invalid && 'utrecht-radio-button--invalid',
        required && 'utrecht-radio-button--required',
      )}
      onChange={(event) => {
        onChange?.(event);
        onUpdateGroup?.(event);
      }}
      {...otherProps}
    />
    {label}
  </label>
);

export default RadioButton;
