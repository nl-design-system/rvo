/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';

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
  multiple: {
    control: 'boolean',
  },
};

export const defaultArgs = {
  id: 'field',
  disabled: false,
  focus: false,
  invalid: false,
  required: false,
  multiple: true,
};

export const FileInput = ({
  id = defaultArgs.id,
  disabled = defaultArgs.disabled,
  focus = defaultArgs.focus,
  invalid = defaultArgs.invalid,
  required = defaultArgs.required,
  multiple = defaultArgs.multiple,
}) =>
  `<input id="${id}" type="file" class="${clsx(
    'rvo-file-input',
    disabled && 'rvo-file-input--disabled',
    focus && 'rvo-file-input--focus rvo-file-input--focus-visible',
    invalid && 'rvo-file-input--invalid',
    required && 'rvo-file-input--required',
  )}"${disabled ? ' disabled' : ''}${invalid ? ' aria-invalid="true"' : ''} ${multiple ? 'multiple' : ''}/>`;
