/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';
import React from 'react';
import { Checkbox, ICheckboxProps } from './template';

export interface ICheckboxGroupProps {
  invalid: boolean;
  options: ICheckboxProps[];
}

const defaultOptions: ICheckboxProps[] = [
  { id: 'optionA', labelText: 'Option A' },
  { id: 'optionB', labelText: 'Option B', checked: true },
  { id: 'optionC', labelText: 'Option C' },
  { id: 'optionD', labelText: 'Option D' },
];

export const argTypes = {
  invalid: { control: 'boolean' },
  options: {
    type: {
      name: 'array',
      required: true,
    },
  },
};

export const defaultArgs: ICheckboxGroupProps = {
  invalid: false,
  options: defaultOptions,
};

export const CheckboxGroup: React.FC<ICheckboxGroupProps> = ({
  invalid = defaultArgs.invalid,
  options = defaultArgs.options,
}) => (
  <div
    className={clsx(
      'rvo-checkbox__group',
      invalid && 'rvo-custom-radio-button__group--error',
      'rvo-layout-column',
      'rvo-layout-gap--md',
      'rvo-layout--wrap',
    )}
  >
    {options.map((option) => (
      <Checkbox key={option.id} id={option.id} labelText={option.labelText} checked={option.checked} />
    ))}
  </div>
);
