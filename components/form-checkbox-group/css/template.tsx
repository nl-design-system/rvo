/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import { Checkbox, ICheckboxProps } from '../../form-checkbox/css/template';
import { defaultArgs } from './defaultArgs';

export interface ICheckboxGroupProps {
  invalid?: boolean;
  options?: ICheckboxProps[];
}

export const argTypes = {
  invalid: { control: 'boolean' },
  options: {
    type: {
      name: 'array',
      required: true,
    },
  },
};

export const CheckboxGroup: React.FC<PropsWithChildren<ICheckboxGroupProps>> = ({
  invalid = defaultArgs.invalid,
  options = defaultArgs.options,
  children,
}: PropsWithChildren<ICheckboxGroupProps>) => (
  <div
    className={clsx(
      'rvo-checkbox__group',
      invalid && 'rvo-custom-radio-button__group--error',
      'rvo-layout-column',
      'rvo-layout-gap--md',
      'rvo-layout--wrap',
    )}
  >
    {children ||
      options.map((option) => (
        <Checkbox key={option.id} id={option.id} label={option.label} checked={option.checked} />
      ))}
  </div>
);

export default CheckboxGroup;
