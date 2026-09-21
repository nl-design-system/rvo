/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import '@nl-rvo/css-form-text-input';
import clsx from 'clsx';
import React from 'react';
import { ITextInputProps } from './FormTextInput.types';

export const TextInput: React.FC<ITextInputProps> = ({
  type = 'text',
  defaultValue,
  disabled,
  focus,
  invalid,
  readOnly,
  required,
  placeholder,
  validation,
  prefix,
  suffix,
  size = 'md',
  maxLength,
  className,
  value,
  ...otherProps
}: ITextInputProps) => {
  const isControlled = value !== undefined;

  const textBoxProps = {
    type,
    disabled,
    placeholder,
    readOnly,
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
      type={type}
      aria-invalid={invalid}
      aria-required={required}
      className={clsx(className, 'utrecht-textbox', size && `utrecht-textbox--${size}`)}
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
