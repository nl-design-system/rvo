/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { Field, argTypes as fieldArgTypes, IFieldProps } from '../../form-field/src/template';
import {
  IRadioButtonGroupProps,
  argTypes as radioButtonArgTypes,
  RadioButtonGroup,
} from '../../form-radio-button-group/src/template';
import { extractArgs, extractOtherArgs } from '../../utils/extractArgs';

export interface IRadioButtonFieldProps extends IFieldProps, IRadioButtonGroupProps {}

export const argTypes = { ...fieldArgTypes, ...radioButtonArgTypes };

export const RadioButtonField: React.FC<IRadioButtonFieldProps> = (args: IRadioButtonFieldProps) => {
  const fieldArgs = extractArgs(args, fieldArgTypes);
  const radioButtonArgs = extractArgs(args, radioButtonArgTypes);

  const fieldArgsWithOtherAttributes = extractOtherArgs(args, { ...fieldArgTypes, ...radioButtonArgTypes });

  return (
    <Field {...fieldArgs} {...fieldArgsWithOtherAttributes}>
      <RadioButtonGroup {...radioButtonArgs}>{args.children}</RadioButtonGroup>
    </Field>
  );
};
export default RadioButtonField;
