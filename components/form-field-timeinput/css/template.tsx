/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { Field, argTypes as fieldArgTypes, IFieldProps } from '../../form-field/css/template';
import { ITimeInputProps, TimeInput, argTypes as timeInputArgTypes } from '../../form-timeinput/css/template';
import extractArgs from '../../utils/extractArgs';

export interface ITimeInputFieldProps extends IFieldProps, ITimeInputProps {}

export const argTypes = { ...fieldArgTypes, ...timeInputArgTypes };

export const TimeInputField: React.FC<ITimeInputFieldProps> = (args: ITimeInputFieldProps) => {
  const fieldArgs = extractArgs(args, fieldArgTypes);
  const timeInputArgs = extractArgs(args, timeInputArgTypes);
  return (
    <Field {...fieldArgs}>
      <TimeInput {...timeInputArgs} />
    </Field>
  );
};

export default TimeInputField;
