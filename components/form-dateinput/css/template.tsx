/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import '../../form-textinput/css/index.scss';

export interface IDateInputProps {
  id?: string;
  disabled?: boolean;
  focus?: boolean;
  readOnly?: boolean;
  invalid?: boolean;
  required?: boolean;
  placeholder?: string;
  value?: string;
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
    description: 'Date value in "yyyy-MM-dd" format',
  },
};

export const defaultArgs: IDateInputProps = {
  id: 'field',
  disabled: false,
  focus: false,
  readOnly: false,
  invalid: false,
  required: false,
  value: '',
};

export const DateInput: React.FC<IDateInputProps> = ({
  id = defaultArgs.id,
  disabled = defaultArgs.disabled,
  focus = defaultArgs.focus,
  readOnly = defaultArgs.readOnly,
  invalid = defaultArgs.invalid,
  required = defaultArgs.required,
  value = defaultArgs.value,
}) => {
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
    disabled: disabled || null,
    'aria-invalid': invalid || null,
    required: required || null,
    readOnly: readOnly || null,
    defaultValue: value,
  };

  return <input type="date" {...props} />;
};
