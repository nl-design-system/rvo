/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { Field, argTypes as fieldArgTypes, FieldPropsWithoutFieldId } from '../form-field';
import { ITimeInputProps, TimeInput, argTypes as timeInputArgTypes } from '../form-timeinput';
import { extractArgs, extractOtherArgs } from '../../utils/extractArgs';

export interface ITimeInputFieldProps extends FieldPropsWithoutFieldId, ITimeInputProps {}

export const argTypes = { ...fieldArgTypes, ...timeInputArgTypes };

export const TimeInputField: React.FC<ITimeInputFieldProps> = (args: ITimeInputFieldProps) => {
  const fieldArgs = extractArgs(args, fieldArgTypes) as FieldPropsWithoutFieldId;
  const timeInputArgs = extractArgs(args, timeInputArgTypes) as ITimeInputProps;

  const fieldArgsWithOtherAttributes = extractOtherArgs(args, { ...fieldArgTypes, timeInputArgTypes });

  return (
    <Field {...fieldArgs} fieldId={timeInputArgs.id} {...fieldArgsWithOtherAttributes}>
      <TimeInput {...timeInputArgs} aria-describedby={fieldArgs.helperTextId} />
    </Field>
  );
};

export default TimeInputField;
