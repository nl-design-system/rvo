/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { Field, argTypes as fieldArgTypes, IFieldProps } from '../form-field/template';
import { ITextInputProps, TextInput, argTypes as textInputArgTypes } from '../form-textinput/template';
import extractArgs from '../utils/extractArgs';
import './index.scss';

export interface IDateInputFieldProps extends IFieldProps, ITextInputProps {}

export const argTypes = { ...fieldArgTypes, ...textInputArgTypes };

export const DateInputField: React.FC<IDateInputFieldProps> = (args: IDateInputFieldProps) => {
  const fieldArgs = extractArgs(args, fieldArgTypes);
  const TextInputArgs = extractArgs(args, textInputArgTypes);
  return (
    <Field {...fieldArgs} label="Datum veld" helperText="Bijvoorbeeld: 27 3 2007" className="rvo-dateinput">
      <div className="rvo-dateinput__part">
        dag
        <TextInput {...TextInputArgs} size="xs" maxLength={2} />
      </div>

      <div className="rvo-dateinput__part">
        maand
        <TextInput {...TextInputArgs} size="xs" maxLength={2} />
      </div>
      <div className="rvo-dateinput__part">
        jaar
        <TextInput {...TextInputArgs} size="sm" maxLength={4} />
      </div>
    </Field>
  );
};

export default DateInputField;
