/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { Field, argTypes as fieldArgTypes, FieldPropsWithoutFieldId } from '../../form-field/src/template';
import { argTypes as selectArgTypes } from '../../form-select/src/argTypes';
import { ISelectProps, Select } from '../../form-select/src/template';
import { extractArgs, extractOtherArgs } from '../../utils/extractArgs';

export interface ISelectFieldProps extends FieldPropsWithoutFieldId, ISelectProps {}

export const argTypes = { ...fieldArgTypes, ...selectArgTypes };

export const SelectField: React.FC<ISelectFieldProps> = (args: ISelectFieldProps) => {
  const fieldArgs = extractArgs(args, fieldArgTypes) as FieldPropsWithoutFieldId;
  const selectArgs = extractArgs(args, selectArgTypes) as ISelectProps;

  const fieldArgsWithOtherAttributes = extractOtherArgs(args, { ...fieldArgTypes, ...selectArgTypes });

  return (
    <Field {...fieldArgs} fieldId={selectArgs.id} {...fieldArgsWithOtherAttributes}>
      <Select {...selectArgs} aria-describedby={fieldArgs.helperTextId} />
    </Field>
  );
};

export default SelectField;
