/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { Textbox } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React from 'react';
import '../../form-textinput/css/index.scss';

export interface IDateInputProps extends React.DOMAttributes<any> {
  id?: string;
  disabled?: boolean;
  focus?: boolean;
  readOnly?: boolean;
  invalid?: boolean;
  required?: boolean;
  placeholder?: string;
  value?: string;
  prefix?: string;
  suffix?: string;
  min?: string;
  max?: string;
  size?: string;
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
  prefix: {
    control: 'text',
  },
  suffix: {
    control: 'text',
  },
  min: {
    control: 'text',
    description: 'Date in "yyyy-MM-dd" format',
  },
  max: {
    control: 'text',
    description: 'Date in "yyyy-MM-dd" format',
  },
  size: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'radio' },
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
  prefix: '',
  suffix: '',
  min: null,
  max: null,
  size: 'lg',
};

export const DateInput: React.FC<IDateInputProps> = ({
  id = defaultArgs.id,
  disabled = defaultArgs.disabled,
  focus = defaultArgs.focus,
  readOnly = defaultArgs.readOnly,
  invalid = defaultArgs.invalid,
  required = defaultArgs.required,
  value = defaultArgs.value,
  prefix = defaultArgs.prefix,
  suffix = defaultArgs.suffix,
  min = defaultArgs.min,
  max = defaultArgs.max,
  size = defaultArgs.size,
  ...otherProps
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
    ...(min && { min }),
    ...(max && { max }),
    ...otherProps,
  };

  const inputMarkup = (
    <Textbox
      type="date"
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
