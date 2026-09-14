/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { extractArgs, extractOtherArgs } from '../../../../packages/component-library-react/src/utils/extractArgs';
import { CheckboxGroup, ICheckboxGroupProps } from '@nl-rvo/react-form-checkbox-group';
import { defaultArgs as checkboxGroupDefaultArgs } from '../../../../packages/component-library-react/src/components/form-checkbox-group/defaultArgs';
import { Field, argTypes as fieldArgTypes, IFieldProps } from '@nl-rvo/react-form-field';

const checkboxArgTypes = {
  ...Object.fromEntries(Object.keys(checkboxGroupDefaultArgs).map((key) => [key, {}])),
  currentSelection: {},
  onChange: {},
  children: {},
};

export interface ICheckboxFieldProps extends IFieldProps, ICheckboxGroupProps {}

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
