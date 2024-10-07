/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import { defaultArgs } from './defaultArgs';
import './index.scss';

export interface IFileInputProps {
  id?: string;
  disabled?: boolean;
  /** @uxpinpropname Has focus */
  focus?: boolean;
  /** @uxpinpropname Is invalid */
  invalid?: boolean;
  required?: boolean;
  /** @uxpinpropname accept (file type specifiers */
  accept?: string;
  multiple?: boolean;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
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
  required: {
    control: 'boolean',
  },
  accept: {
    control: 'text',
  },
  multiple: {
    control: 'boolean',
  },
};

export const FileInput: React.FC<IFileInputProps> = ({
  id = defaultArgs.id,
  disabled = defaultArgs.disabled,
  focus = defaultArgs.focus,
  invalid = defaultArgs.invalid,
  required = defaultArgs.required,
  accept = defaultArgs.accept,
  multiple = defaultArgs.multiple,
  ...otherProps
}: IFileInputProps) => (
  <input
    id={id}
    type="file"
    className={clsx(
      'rvo-file-input',
      disabled && 'rvo-file-input--disabled',
      focus && 'rvo-file-input--focus rvo-file-input--focus-visible',
      invalid && 'rvo-file-input--invalid',
      required && 'rvo-file-input--required',
    )}
    disabled={disabled || undefined}
    aria-invalid={invalid || undefined}
    accept={accept || undefined}
    multiple={multiple || undefined}
    {...otherProps}
  />
);

export default FileInput;
