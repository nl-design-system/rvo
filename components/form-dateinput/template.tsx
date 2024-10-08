/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { Textbox } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React from 'react';
import '../form-textinput/index.scss';
import { defaultArgs } from './defaultArgs';

export interface IDateInputProps {
  id?: string;
  disabled?: boolean;
  /** @uxpinpropname Has focus */
  focus?: boolean;
  readOnly?: boolean;
  /** @uxpinpropname Is invalid */
  invalid?: boolean;
  required?: boolean;
  placeholder?: string;
  /** @uxpinpropname Value (yyyy-mm-dd format)> */
  value?: string;
  /** @uxpinpropname Min (yyyy-mm-dd format)> */
  min?: string;
  /** @uxpinpropname Max (yyyy-mm-dd format)> */
  max?: string;
  step?: number;
  size?: string;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
  onInvalid?: (event: React.InvalidEvent<HTMLInputElement>) => void;
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
    description: 'Date value in "hh:mm:ss" format',
  },
  min: {
    control: 'text',
    description: 'Date value in "hh:mm:ss" format',
  },
  max: {
    control: 'text',
    description: 'Date value in "hh:mm:ss" format',
  },
  step: {
    control: 'number',
  },
  size: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
};

export const DateInput: React.FC<IDateInputProps> = ({
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
  size = defaultArgs.size,
  ...otherProps
}: IDateInputProps) => {
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
    ...otherProps,
  };

  return (
    <Textbox
      type="date"
      {...props}
      className={clsx(size === 'sm' && 'utrecht-textbox--sm', size === 'md' && 'utrecht-textbox--md')}
    />
  );
};

export default DateInput;
