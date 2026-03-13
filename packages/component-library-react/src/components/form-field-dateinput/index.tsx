/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { extractArgs, extractOtherArgs } from '../../utils/extractArgs';
import { DateInput, IDateInputProps } from '../form-dateinput';
import { defaultArgs as dateInputDefaultArgs } from '../form-dateinput/defaultArgs';
import { Field, argTypes as fieldArgTypes, FieldPropsWithoutFieldId } from '../form-field';

const dateInputArgTypes = {
  ...Object.fromEntries(Object.keys(dateInputDefaultArgs).map((key) => [key, {}])),
  defaultValue: {},
  value: {},
  onFocus: {},
  onBlur: {},
  onChange: {},
  onClick: {},
  onInput: {},
  onInvalid: {},
};

export interface IDateInputFieldProps extends FieldPropsWithoutFieldId, IDateInputProps {}

export const DateInputField: React.FC<IDateInputFieldProps> = (args: IDateInputFieldProps) => {
  const fieldArgs = extractArgs(args, fieldArgTypes) as FieldPropsWithoutFieldId;
  const dateInputArgs = extractArgs(args, dateInputArgTypes) as IDateInputProps;

  const fieldArgsWithOtherAttributes = extractOtherArgs(args, { ...fieldArgTypes, ...dateInputArgTypes });

  return (
    <Field {...fieldArgs} fieldId={dateInputArgs.id} {...fieldArgsWithOtherAttributes}>
      <DateInput {...dateInputArgs} aria-describedby={fieldArgs.helperTextId} />
    </Field>
  );
};

export default DateInputField;
