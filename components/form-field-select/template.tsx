/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { Field, argTypes as fieldArgTypes, IFieldProps } from '../form-field/template';
import { ISelectProps, Select, argTypes as selectArgTypes } from '../form-select/template';
import extractArgs from '../utils/extractArgs';

export interface ISelectFieldProps extends IFieldProps, ISelectProps {}

export const argTypes = { ...fieldArgTypes, ...selectArgTypes };

export const SelectField: React.FC<ISelectFieldProps> = (args: ISelectFieldProps) => {
  const fieldArgs = extractArgs(args, fieldArgTypes) as IFieldProps;
  const selectArgs = extractArgs(args, selectArgTypes);
  return (
    <Field {...fieldArgs}>
      <Select {...selectArgs} aria-describedby={fieldArgs.helperTextId?.length ? fieldArgs.helperTextId : null} />
    </Field>
  );
};

export default SelectField;
