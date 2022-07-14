/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';
import React from 'react';

interface ISelectOption {
  value: string;
  label: string;
  selected?: boolean;
}

export interface ISelectProps {
  id: string;
  disabled?: boolean;
  focus?: boolean;
  invalid?: boolean;
  required?: boolean;
  options: ISelectOption[];
}

const defaultOptions: ISelectOption[] = [
  { value: '1', label: 'Option #1' },
  { value: '2', label: 'Option #2', selected: true },
  { value: '3', label: 'Option #3' },
];

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

export const defaultArgs: ISelectProps = {
  id: 'field',
  disabled: false,
  focus: false,
  invalid: false,
  required: false,
  options: defaultOptions,
};

export const Select: React.FC<ISelectProps> = ({
  id = defaultArgs.id,
  disabled = defaultArgs.disabled,
  focus = defaultArgs.focus,
  invalid = defaultArgs.invalid,
  required = defaultArgs.required,
  options = defaultArgs.options,
}) => (
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
    >
      {options.map(({ label, selected, value }) => (
        <option key={value} selected={selected || null} value={value || null}>
          {label}
        </option>
      ))}
    </select>
  </div>
);
