/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';
import React, { HTMLAttributes } from 'react';
import { defaultArgs } from './defaultArgs';

export interface ISelectOption {
  value: string;
  label: string;
  onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLSelectElement>) => void;
  onInvalid?: (event: React.InvalidEvent<HTMLSelectElement>) => void;
}

export interface ISelectProps extends HTMLAttributes<HTMLSelectElement> {
  id?: string;
  disabled?: boolean;
  /** @uxpinpropname Has focus */
  focus?: boolean;
  /** @uxpinpropname Is invalid */
  invalid?: boolean;
  required?: boolean;
  options?: ISelectOption[];
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'max';
  onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onInvalid?: (event: React.InvalidEvent<HTMLSelectElement>) => void;
  /**
   * @uxpinbind onChange 0.target.value
   */
  defaultValue?: string;
  value?: string;
}

export const Select: React.FC<ISelectProps> = ({
  id = defaultArgs.id,
  disabled = defaultArgs.disabled,
  focus = defaultArgs.focus,
  invalid = defaultArgs.invalid,
  required = defaultArgs.required,
  options = defaultArgs.options,
  size = defaultArgs.size,
  defaultValue,
  value,
  onChange,
  ...otherProps
}: ISelectProps) => (
  <div className={clsx('rvo-select-wrapper', size && size !== 'max' && `rvo-select--${size}`)}>
    <select
      id={id}
      aria-invalid={invalid || undefined}
      disabled={disabled || undefined}
      required={required || undefined}
      className={clsx('utrecht-select', 'utrecht-select--html-select', {
        'utrecht-select--disabled': disabled,
        'utrecht-select--focus': focus,
        'utrecht-select--focus-visible': focus,
        'utrecht-select--invalid': invalid,
        'utrecht-select--required': required,
      })}
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
