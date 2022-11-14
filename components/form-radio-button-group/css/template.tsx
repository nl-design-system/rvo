/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';
import React, { PropsWithChildren } from 'react';
import { IRadioButtonProps, RadioButton } from '../../form-radio-button/css/template';
import { defaultArgs } from './defaultArgs';

export interface IRadioButtonGroupProps {
  name?: string;
  invalid?: boolean;
  options?: IRadioButtonProps[];
}

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

export const RadioButtonGroup: React.FC<PropsWithChildren<IRadioButtonGroupProps>> = ({
  name = defaultArgs.name,
  invalid = defaultArgs.invalid,
  options = defaultArgs.options,
  children,
}: PropsWithChildren<IRadioButtonGroupProps>) => (
  <div
    className={clsx(
      'rvo-layout-column',
      'rvo-layout-gap--md',
      'rvo-layout--wrap',
      invalid && 'rvo-custom-radio-button__group--error',
    )}
  >
    {children ||
      options.map((option) => (
        <RadioButton key={option.id} id={option.id} name={name} label={option.label} checked={option.checked} />
      ))}
  </div>
);

export default RadioButtonGroup;
