/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';

const exampleOptions = [
  { value: '1', label: 'Option #1' },
  { value: '2', label: 'Option #2', selected: true },
  { value: '3', label: 'Option #3' },
];

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
  options: {
    description: 'Options',
    type: {
      name: 'array',
      required: true,
    },
  },
};

export const defaultArgs = {
  id: 'field',
  disabled: false,
  focus: false,
  invalid: false,
  required: false,
  options: exampleOptions,
};

export const Select = ({
  id = defaultArgs.id,
  disabled = defaultArgs.disabled,
  focus = defaultArgs.focus,
  invalid = defaultArgs.invalid,
  required = defaultArgs.required,
  options = defaultArgs.options,
}) =>
  `<div class="utrecht-select-wrapper"><select id="${id}"${invalid ? ' aria-invalid="true"' : ''}${
    disabled ? ' disabled' : ''
  }${required ? ' required' : ''} class="${clsx('utrecht-select', 'utrecht-select--html-select', {
    'utrecht-select--disabled': disabled,
    'utrecht-select--focus': focus,
    'utrecht-select--focus-visible': focus,
    'utrecht-select--invalid': invalid,
    'utrecht-select--required': required,
  })}">
  ${options
    .map(
      ({ label, selected, value }) =>
        `<option${selected ? ' selected' : ''}${value ? ` value="${value}"` : ''}>${label}</option>`,
    )
    .join('\n  ')}
</select></div>`;
