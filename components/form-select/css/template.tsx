/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';
import React from 'react';
import { defaultArgs } from './defaultArgs';

export interface ISelectOption {
  value: string;
  label: string;
  selected?: boolean;
  onFocus?: (event) => void;
  onBlur?: (event) => void;
  onChange?: (event) => void;
  onClick?: (event) => void;
  onInvalid?: (event) => void;
}

export interface ISelectProps {
  id?: string;
  disabled?: boolean;
  focus?: boolean;
  invalid?: boolean;
  required?: boolean;
  options?: ISelectOption[];
}

export const argTypes = {
  id: { control: 'text' },
  disabled: {
    control: 'boolean',
  },
  focus: {
    control: 'boolean',
  },
  invalid: {
    control: 'boolean',
  },
  required: {
    control: 'boolean',
  },
  options: {
    type: {
      name: 'array',
      required: true,
    },
  },
};

export const Select: React.FC<ISelectProps> = ({
  id = defaultArgs.id,
  disabled = defaultArgs.disabled,
  focus = defaultArgs.focus,
  invalid = defaultArgs.invalid,
  required = defaultArgs.required,
  options = defaultArgs.options,
  ...otherProps
}: ISelectProps) => (
  <div className="rvo-select-wrapper">
    <select
      id={id}
      aria-invalid={invalid || null}
      disabled={disabled || null}
      required={required || null}
      className={clsx('utrecht-select', 'utrecht-select--html-select', {
        'utrecht-select--disabled': disabled,
        'utrecht-select--focus': focus,
        'utrecht-select--focus-visible': focus,
        'utrecht-select--invalid': invalid,
        'utrecht-select--required': required,
      })}
      {...otherProps}
    >
      {options.map(({ label, selected, value }) => (
        <option key={value} selected={selected || null} defaultValue={value || null}>
          {label}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
