/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';

export const argTypes = {
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
    description: 'Read-only',
    control: 'boolean',
  },
  required: {
    description: 'Required',
    control: 'boolean',
  },
  type: {
    options: ['text', 'textarea', 'number'],
    control: { type: 'radio' },
  },
  placeholder: {
    control: 'text',
  },
  value: {
    description: 'Value',
    control: 'text',
  },
};

export const defaultArgs = {
  disabled: false,
  focus: false,
  invalid: false,
  readOnly: false,
  required: false,
  type: 'text',
  placeholder: '',
  value: '',
};

export const TextInput = ({
  disabled = defaultArgs.disabled,
  focus = defaultArgs.focus,
  invalid = defaultArgs.invalid,
  readOnly = defaultArgs.readOnly,
  required = defaultArgs.required,
  type = defaultArgs.type,
  placeholder = defaultArgs.placeholder,
  value = defaultArgs.value,
}) =>
  `<${type !== 'textarea' ? 'input' : 'textarea'} class="${clsx(
    'utrecht-textbox',
    'utrecht-textbox--html-input',
    disabled && 'utrecht-textbox--disabled',
    focus && 'utrecht-textbox--focus utrecht-textbox--focus-visible',
    invalid && 'utrecht-textbox--invalid',
    readOnly && 'utrecht-textbox--readonly',
    required && 'utrecht-textbox--required',
  )}"${disabled ? ' disabled' : ''}${invalid ? ' aria-invalid="true"' : ''}${
    placeholder ? ` placeholder="${placeholder}"` : ''
  }${type === 'number' ? ' inputmode="numeric" pattern="[0-9]*"' : ''}${readOnly ? ' readonly' : ''}${
    required ? ' required' : ''
  } ${type !== 'textarea' ? `value="${value}"` : ''}>${type === 'textarea' ? value : ''}</${
    type !== 'textarea' ? 'input' : 'textarea'
  }>`;
