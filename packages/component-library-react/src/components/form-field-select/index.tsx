/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { extractArgs, extractOtherArgs } from '../../utils/extractArgs';
import { Field, argTypes as fieldArgTypes, FieldPropsWithoutFieldId } from '../form-field';
import { ISelectProps, Select } from '../form-select';
import { defaultArgs as selectDefaultArgs } from '../form-select/defaultArgs';

const selectArgTypes = {
  ...Object.fromEntries(Object.keys(selectDefaultArgs).map((key) => [key, {}])),
  defaultValue: {},
  value: {},
  onFocus: {},
  onBlur: {},
  onChange: {},
  onInvalid: {},
};

export interface ISelectFieldProps extends FieldPropsWithoutFieldId, ISelectProps {}

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
