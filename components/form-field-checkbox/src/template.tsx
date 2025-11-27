/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import {
  argTypes as checkboxArgTypes,
  CheckboxGroup,
  ICheckboxGroupProps,
} from '../../form-checkbox-group/src/template';
import { Field, argTypes as fieldArgTypes, IFieldProps } from '../../form-field/src/template';
import { extractArgs, extractOtherArgs } from '../../utils/extractArgs';

export interface ICheckboxFieldProps extends IFieldProps, ICheckboxGroupProps {}

export const argTypes = { ...fieldArgTypes, ...checkboxArgTypes };

export const CheckboxField: React.FC<ICheckboxFieldProps> = (args: ICheckboxFieldProps) => {
  const fieldArgs = extractArgs(args, fieldArgTypes);
  const checkboxArgs = extractArgs(args, checkboxArgTypes);

  const fieldArgsWithOtherAttributes = extractOtherArgs(args, { ...fieldArgTypes, ...checkboxArgTypes });

  return (
    <Field {...fieldArgs} {...fieldArgsWithOtherAttributes}>
      <CheckboxGroup {...checkboxArgs}>{args.children}</CheckboxGroup>
    </Field>
  );
};

export default CheckboxField;
