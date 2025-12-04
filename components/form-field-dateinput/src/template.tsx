/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { DateInput, argTypes as dateInputArgTypes, IDateInputProps } from '../../form-dateinput/src/template';
import { Field, argTypes as fieldArgTypes, FieldPropsWithoutFieldId } from '../../form-field/src/template';
import { extractArgs, extractOtherArgs } from '../../utils/extractArgs';

export interface IDateInputFieldProps extends FieldPropsWithoutFieldId, IDateInputProps {}

export const argTypes = { ...fieldArgTypes, ...dateInputArgTypes };

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
