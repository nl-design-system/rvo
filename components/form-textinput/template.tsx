/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import './index.scss';
import { Textarea, Textbox } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React, { useState } from 'react';
import { defaultArgs } from './defaultArgs';

export interface ITextInputProps {
  key?: string;
  id?: string;
  disabled?: boolean;
  focus?: boolean;
  invalid?: boolean;
  readOnly?: boolean;
  required?: boolean;
  inputType?: string;
  placeholder?: string;
  value?: string;
  validation?: string;
  prefix?: string;
  suffix?: string;
  size?: string;
  maxLength?: number | null;
  maxLengthIndicator?: boolean;
  onFocus?: (event) => void;
  onBlur?: (event) => void;
  onChange?: (event) => void;
  onClick?: (event) => void;
  onInput?: (event) => void;
  onInvalid?: (event) => void;
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
  inputType: {
    options: ['text', 'textarea'],
    control: { type: 'radio' },
  },
  placeholder: {
    control: 'text',
  },
  value: {
    control: 'text',
  },
  validation: { options: ['text', 'number', 'currency'], control: { type: 'radio' } },
  prefix: {
    control: 'text',
  },
  suffix: {
    control: 'text',
  },
  size: {
    options: ['xs', 'sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  maxLength: {
    control: 'number',
  },
  maxLengthIndicator: {
    control: 'boolean',
  },
};

export const TextInput: React.FC<ITextInputProps> = ({
  id = defaultArgs.id,
  disabled = defaultArgs.disabled,
  focus = defaultArgs.focus,
  invalid = defaultArgs.invalid,
  readOnly = defaultArgs.readOnly,
  required = defaultArgs.required,
  inputType = defaultArgs.inputType,
  placeholder = defaultArgs.placeholder,
  value = defaultArgs.value,
  validation = defaultArgs.validation,
  prefix = defaultArgs.prefix,
  suffix = defaultArgs.suffix,
  size = defaultArgs.size,
  maxLength = defaultArgs.maxLength,
  maxLengthIndicator = defaultArgs.maxLengthIndicator,
  ...otherProps
}: ITextInputProps) => {
  const props = {
    id,
    disabled,
    invalid,
    required,
    readOnly,
    placeholder,
    defaultValue: value,
    ...((validation === 'number' || validation === 'currency') && {
      inputMode: 'numeric' as any,
      pattern: validation === 'currency' ? '[0-9.,]*' : '[0-9]*',
    }),
    maxLength,
    ...otherProps,
  };

  const [currentValue, setCurrentValue] = useState(value);

  if (inputType === 'text') {
    const inputMarkup = (
      <Textbox
        {...props}
        className={clsx(
          size === 'xs' && 'utrecht-textbox--xs',
          size === 'sm' && 'utrecht-textbox--sm',
          size === 'md' && 'utrecht-textbox--md',
          focus && ['utrecht-textbox--focus', 'utrecht-textbox--focus-visible'],
        )}
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
  } else if (maxLength && maxLengthIndicator) {
    // Override onChange
    props.onChange = (event) => {
      otherProps.onChange?.(event);
      setCurrentValue(event.target.value);
    };
    return (
      <div className={clsx('rvo-layout-column', 'rvo-layout-gap--xs')}>
        <Textarea {...props} className={clsx(focus && ['utrecht-textbox--focus', 'utrecht-textbox--focus-visible'])} />
        <span className="utrecht-textbox-remaining-chars">
          Nog {maxLength - currentValue.length} teken{maxLength - currentValue.length > 1 && 's'} over
        </span>
      </div>
    );
  } else {
    return (
      <Textarea {...props} className={clsx(focus && ['utrecht-textbox--focus', 'utrecht-textbox--focus-visible'])} />
    );
  }
};

export default TextInput;
