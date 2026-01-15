/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import './index.scss';
import clsx from 'clsx';
import React from 'react';
import { defaultArgs } from './defaultArgs';

export interface ITextInputProps {
  /** @uxpinignoreprop */
  key?: string;
  /** @uxpinignoreprop */
  id?: string;
  type?: 'text' | 'password' | 'email' | 'tel' | 'url' | 'search' | 'number' | 'date' | 'time' | 'datetime-local';
  disabled?: boolean;
  /** @uxpinpropname Has focus */
  focus?: boolean;
  /** @uxpinpropname Is invalid */
  invalid?: boolean;
  readOnly?: boolean;
  required?: boolean;
  placeholder?: string;
  validation?: 'none' | 'currency';
  prefix?: string;
  suffix?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'max';
  maxLength?: number | undefined;
  className?: string;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
  onInvalid?: (event: React.InvalidEvent<EventTarget & HTMLInputElement>) => void;
  defaultValue?: string | number | readonly string[];
  value?: string | number | readonly string[];
  autoComplete?: string;
  onKeyDown?: (event: React.FormEvent<HTMLInputElement>) => void;
  role?: string;
}

export const argTypes = {
  autoFocus: {
    control: 'boolean',
  },
  id: { control: 'text' },
  type: {
    options: ['text', 'password', 'email', 'tel', 'url', 'search', 'number', 'date', 'time', 'datetime-local'],
    control: { type: 'select' },
  },
  defaultValue: {
    control: 'text',
  },
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
  placeholder: {
    control: 'text',
  },
  value: {
    control: 'text',
  },
  validation: { options: ['none', 'currency'], control: { type: 'radio' } },
  prefix: {
    control: 'text',
  },
  suffix: {
    control: 'text',
  },
  size: {
    options: ['xs', 'sm', 'md', 'lg', 'max'],
    control: { type: 'radio' },
  },
  maxLength: {
    control: 'number',
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

export const TextInput: React.FC<ITextInputProps> = ({
  id = defaultArgs.id,
  type = defaultArgs.type,
  defaultValue,
  disabled = defaultArgs.disabled,
  focus = defaultArgs.focus,
  invalid = defaultArgs.invalid,
  readOnly = defaultArgs.readOnly,
  required = defaultArgs.required,
  placeholder = defaultArgs.placeholder,
  validation = defaultArgs.validation,
  prefix = defaultArgs.prefix,
  suffix = defaultArgs.suffix,
  size = defaultArgs.size,
  maxLength = defaultArgs.maxLength,
  className,
  value,
  ...otherProps
}: ITextInputProps) => {
  const isControlled = value !== undefined;

  const textBoxProps = {
    id,
    type,
    disabled,
    invalid,
    required,
    readOnly,
    placeholder,
    className,
    value: isControlled ? value : undefined,
    defaultValue: !isControlled ? defaultValue : undefined,
    ...(validation === 'currency' && {
      inputMode: 'numeric' as any,
      pattern: '[0-9.,]*',
    }),
    maxLength,
    ...otherProps,
  };

  const inputMarkup = (
    <input
      {...textBoxProps}
      type="text"
      className={clsx(
        className,
        'utrecht-textbox',
        size === 'xs' && 'utrecht-textbox--xs',
        size === 'sm' && 'utrecht-textbox--sm',
        size === 'md' && 'utrecht-textbox--md',
        size === 'lg' && 'utrecht-textbox--lg',
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
  }
  return inputMarkup;
};

export default TextInput;
