/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { Textbox } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React from 'react';
import { defaultArgs } from './defaultArgs';
import '../form-textinput/index.scss';

export interface ITimeInputProps {
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
  size?: string;
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
    options: ['sm', 'md', 'lg'],
    control: { type: 'radio' },
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
    ...otherProps,
  };

  const inputMarkup = (
    <Textbox
      type="time"
      {...props}
      className={clsx(size === 'sm' && 'utrecht-textbox--sm', size === 'md' && 'utrecht-textbox--md')}
    />
  );
  if (prefix || suffix) {
    return (
      <div className={clsx('rvo-layout-row', 'rvo-layout-gap--md')}>
        {prefix}
        {inputMarkup}
        {suffix}
      </div>
    );
  } else {
    return inputMarkup;
  }
};

export default TimeInput;
