/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React, { PropsWithChildren } from 'react';
import { argTypes as checkboxArgTypes, CheckboxGroup, ICheckboxGroupProps } from '../form-checkbox-group/template';
import { Field, argTypes as fieldArgTypes, IFieldProps } from '../form-field/template';
import extractArgs from '../utils/extractArgs';

export interface ICheckboxFieldProps extends IFieldProps, ICheckboxGroupProps {}

export const argTypes = { ...fieldArgTypes, ...checkboxArgTypes };

export const CheckboxField: React.FC<PropsWithChildren<ICheckboxFieldProps>> = (
  args: PropsWithChildren<ICheckboxFieldProps>,
) => {
  const fieldArgs = extractArgs(args, fieldArgTypes);
  const checkboxArgs = extractArgs(args, checkboxArgTypes);
  return (
    <Field {...fieldArgs}>
      <CheckboxGroup {...checkboxArgs}>{args.children}</CheckboxGroup>
    </Field>
  );
};

export default CheckboxField;
