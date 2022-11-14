/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import './index.scss';
import { Textarea, Textbox } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React from 'react';
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
    options: ['sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
};

export const TextInput: React.FC<ITextInputProps> = ({
  id = defaultArgs.id,
  disabled = defaultArgs.disabled,
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
    ...otherProps,
  };

  if (inputType === 'text') {
    const inputMarkup = (
      <Textbox
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
  } else {
    return <Textarea {...props} />;
  }
};

export default TextInput;
