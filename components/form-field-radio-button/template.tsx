/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React, { PropsWithChildren } from 'react';
import { Field, argTypes as fieldArgTypes, IFieldProps } from '../form-field/template';
import {
  IRadioButtonGroupProps,
  argTypes as radioButtonArgTypes,
  RadioButtonGroup,
} from '../form-radio-button-group/template';
import extractArgs from '../utils/extractArgs';

export interface IRadioButtonFieldProps extends IFieldProps, IRadioButtonGroupProps {}

export const argTypes = { ...fieldArgTypes, ...radioButtonArgTypes };

export const RadioButtonField: React.FC<PropsWithChildren<IRadioButtonFieldProps>> = (
  args: PropsWithChildren<IRadioButtonFieldProps>,
) => {
  const fieldArgs = extractArgs(args, fieldArgTypes);
  const radioButtonArgs = extractArgs(args, radioButtonArgTypes);
  return (
    <Field {...fieldArgs}>
      <RadioButtonGroup {...radioButtonArgs}>{args.children}</RadioButtonGroup>
    </Field>
  );
};
export default RadioButtonField;
