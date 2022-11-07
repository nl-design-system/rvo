/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';
import React from 'react';
import { IRadioButtonProps, RadioButton } from './template';
export interface IRadioButtonGroupProps {
  name?: string;
  invalid?: boolean;
  options?: IRadioButtonProps[];
}

const defaultOptions: IRadioButtonProps[] = [
  { id: 'optionA', labelText: 'Option A' },
  { id: 'optionB', labelText: 'Option B' },
  { id: 'optionC', labelText: 'Option C' },
  { id: 'optionD', labelText: 'Option D' },
];

export const argTypes = {
  name: { control: 'text' },
  invalid: { control: 'boolean' },
  options: {
    type: {
      name: 'array',
      required: true,
    },
  },
};

export const defaultArgs: IRadioButtonGroupProps = {
  name: 'group',
  invalid: false,
  options: defaultOptions,
};

export const RadioButtonGroup: React.FC<IRadioButtonGroupProps> = ({
  name = defaultArgs.name,
  invalid = defaultArgs.invalid,
  options = defaultArgs.options,
}) => (
  <div
    className={clsx(
      'rvo-layout-column',
      'rvo-layout-gap--md',
      'rvo-layout--wrap',
      invalid && 'rvo-custom-radio-button__group--error',
    )}
  >
    {options.map((option) => (
      <RadioButton key={option.id} id={option.id} name={name} labelText={option.labelText} checked={option.checked} />
    ))}
  </div>
);
