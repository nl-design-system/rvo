/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import { defaultArgs } from './defaultArgs';
import TextInput from '../../form-textinput/src/template';

export interface ITimeInputProps extends HTMLAttributes<HTMLInputElement> {
  id?: string;
  disabled?: boolean;
  /** @uxpinpropname Has focus */
  focus?: boolean;
  readOnly?: boolean;
  /** @uxpinpropname Is invalid */
  invalid?: boolean;
  required?: boolean;
  placeholder?: string;
  /** @uxpinpropname Value (hh:mm:ss format)> */
  value?: string;
  /** @uxpinpropname Min (hh:mm:ss format)> */
  min?: string;
  /** @uxpinpropname Max (hh:mm:ss format)> */
  max?: string;
  step?: number;
  prefix?: string;
  suffix?: string;
  size?: 'sm' | 'md' | 'lg' | 'max';
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
  onInvalid?: (event: React.FormEvent<HTMLInputElement>) => void;
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
  readOnly: {
    control: 'boolean',
  },
  required: {
    control: 'boolean',
  },
  value: {
    control: 'text',
    description: 'Time value in "hh:mm:ss" format',
  },
  min: {
    control: 'text',
    description: 'Time value in "hh:mm:ss" format',
  },
  max: {
    control: 'text',
    description: 'Time value in "hh:mm:ss" format',
  },
  step: {
    control: 'number',
  },
  prefix: {
    control: 'text',
  },
  suffix: {
    control: 'text',
  },
  size: {
    options: ['sm', 'md', 'lg', 'max'],
    control: { type: 'radio' },
  },
  onFocus: {
    table: {
      disable: true,
    },
  },
  onBlur: {
    table: {
      disable: true,
    },
  },
  onChange: {
    table: {
      disable: true,
    },
  },
  onClick: {
    table: {
      disable: true,
    },
  },
  onInput: {
    table: {
      disable: true,
    },
  },
  onInvalid: {
    table: {
      disable: true,
    },
  },
};

export const TimeInput: React.FC<ITimeInputProps> = ({
  id = defaultArgs.id,
  disabled = defaultArgs.disabled,
  focus = defaultArgs.focus,
  readOnly = defaultArgs.readOnly,
  invalid = defaultArgs.invalid,
  required = defaultArgs.required,
  value = defaultArgs.value,
  min = defaultArgs.min,
  max = defaultArgs.max,
  step = defaultArgs.step,
  prefix = defaultArgs.prefix,
  suffix = defaultArgs.suffix,
  size = defaultArgs.size,
  ...otherProps
}: ITimeInputProps) => {
  const props = {
    id,
    className: clsx(
      'utrecht-textbox',
      'utrecht-textbox--html-input',
      disabled && 'utrecht-textbox--disabled',
      focus && 'utrecht-textbox--focus utrecht-textbox--focus-visible',
      invalid && 'utrecht-textbox--invalid',
      readOnly && 'utrecht-textbox--readonly',
      required && 'utrecht-textbox--required',
    ),
    disabled: disabled || undefined,
    'aria-invalid': invalid || undefined,
    required: required || undefined,
    readOnly: readOnly || undefined,
    defaultValue: value,
    ...(min && { min }),
    ...(max && { max }),
    ...(step && { step }),
    ...(size && { size }),
    ...(prefix && { prefix }),
    ...(suffix && { suffix }),
    ...otherProps,
  };

  return <TextInput type="time" {...props} />;
};

export default TimeInput;
