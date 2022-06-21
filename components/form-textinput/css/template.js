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
  valueType: { options: ['text', 'number'], control: { type: 'radio' } },
};

export const defaultArgs = {
  id: 'field',
  disabled: false,
  focus: false,
  invalid: false,
  readOnly: false,
  required: false,
  inputType: 'text',
  placeholder: '',
  value: '',
  valueType: 'text',
};

export const TextInput = ({
  id = defaultArgs.id,
  disabled = defaultArgs.disabled,
  focus = defaultArgs.focus,
  invalid = defaultArgs.invalid,
  readOnly = defaultArgs.readOnly,
  required = defaultArgs.required,
  inputType = defaultArgs.inputType,
  placeholder = defaultArgs.placeholder,
  value = defaultArgs.value,
  valueType = defaultArgs.valueType,
}) =>
  `<${inputType !== 'textarea' ? 'input' : 'textarea'} id="${id}" class="${clsx(
    'utrecht-textbox',
    'utrecht-textbox--html-input',
    disabled && 'utrecht-textbox--disabled',
    focus && 'utrecht-textbox--focus utrecht-textbox--focus-visible',
    invalid && 'utrecht-textbox--invalid',
    readOnly && 'utrecht-textbox--readonly',
    required && 'utrecht-textbox--required',
  )}"${disabled ? ' disabled' : ''}${invalid ? ' aria-invalid="true"' : ''}${
    placeholder ? ` placeholder="${placeholder}"` : ''
  }${valueType === 'number' ? ' inputmode="numeric" pattern="[0-9]*"' : ''}${readOnly ? ' readonly' : ''}${
    required ? ' required' : ''
  } ${inputType !== 'textarea' ? `value="${value}"` : ''}>${inputType === 'textarea' ? value : ''}</${
    inputType !== 'textarea' ? 'input' : 'textarea'
  }>`;
