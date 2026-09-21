/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import '@nl-rvo/css-form-file-input';
import { IFileInputProps } from './FormFileInput.types';

export const FileInput: React.FC<IFileInputProps> = ({
  id,
  disabled,
  invalid,
  required,
  accept,
  multiple = false,
  ...otherProps
}: IFileInputProps) => (
  <input
    id={id}
    type="file"
    className={clsx(
      'rvo-file-input',
      disabled && 'rvo-file-input--disabled',
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
