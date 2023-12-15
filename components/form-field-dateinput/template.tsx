/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { DateInput, argTypes as dateInputArgTypes, IDateInputProps } from '../form-dateinput/template';
import { Field, argTypes as fieldArgTypes, IFieldProps } from '../form-field/template';
import extractArgs from '../utils/extractArgs';

export interface IDateInputFieldProps extends IFieldProps, IDateInputProps {}

export const argTypes = { ...fieldArgTypes, ...dateInputArgTypes };

export const DateInputField: React.FC<IDateInputFieldProps> = (args: IDateInputFieldProps) => {
  const fieldArgs = extractArgs(args, fieldArgTypes) as IFieldProps;
  const dateInputArgs = extractArgs(args, dateInputArgTypes);
  return (
    <Field {...fieldArgs}>
      <DateInput {...dateInputArgs} aria-describedby={fieldArgs.helperTextId?.length ? fieldArgs.helperTextId : null} />
    </Field>
  );
};

export default DateInputField;
