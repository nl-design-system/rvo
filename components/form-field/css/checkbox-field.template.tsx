/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import {
  argTypes as checkboxArgTypes,
  defaultArgs as checkboxDefaultArgs,
  CheckboxGroup,
  ICheckboxGroupProps,
} from '../../form-checkbox/css/template.group';
import extractArgs from '../../utils/extractArgs';
import { Field, argTypes as fieldArgTypes, defaultArgs as fieldDefaultArgs, IFieldProps } from './template';
import './index.scss';

interface ICheckboxFieldProps extends IFieldProps, ICheckboxGroupProps {}

export const argTypes = { ...fieldArgTypes, ...checkboxArgTypes };

export const defaultArgs: ICheckboxFieldProps = { ...fieldDefaultArgs, ...checkboxDefaultArgs };

export const CheckboxField: React.FC<ICheckboxFieldProps> = (args) => {
  const fieldArgs = extractArgs(args, fieldArgTypes);
  const checkboxArgs = extractArgs(args, checkboxArgTypes);
  return (
    <Field {...fieldArgs}>
      <CheckboxGroup {...checkboxArgs} />
    </Field>
  );
};
