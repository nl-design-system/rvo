/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { extractArgs, extractOtherArgs } from '../../utils/extractArgs';
import { Field, argTypes as fieldArgTypes, IFieldProps } from '../form-field';
import { IRadioButtonGroupProps, RadioButtonGroup } from '../form-radio-button-group';
import { defaultArgs as radioButtonGroupDefaultArgs } from '../form-radio-button-group/defaultArgs';

const radioButtonArgTypes = {
  ...Object.fromEntries(Object.keys(radioButtonGroupDefaultArgs).map((key) => [key, {}])),
  currentSelection: {},
  onChange: {},
  children: {},
};

export interface IRadioButtonFieldProps extends IFieldProps, IRadioButtonGroupProps {}

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
