/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { Field, argTypes as fieldArgTypes, IFieldProps } from '../form-field/template';
import { ITextInputProps, TextInput, argTypes as textInputArgTypes } from '../form-textinput/template';
import extractArgs from '../utils/extractArgs';
import './index.scss';

type IStrippedFieldProps = Omit<IFieldProps, 'fieldId'>;
type IStrippedTextInputProps = Pick<ITextInputProps, 'disabled' | 'invalid' | 'readOnly' | 'required'>;

export interface IDateInputFieldProps extends IStrippedFieldProps, IStrippedTextInputProps {}

export const argTypes = {
  ...{
    label: fieldArgTypes.label,
    helperText: fieldArgTypes.helperText,
    expandableHelperText: fieldArgTypes.expandableHelperText,
    expandableHelperTextTitle: fieldArgTypes.expandableHelperTextTitle,
    warningText: fieldArgTypes.warningText,
    errorText: fieldArgTypes.errorText,
  },
  ...{
    disabled: textInputArgTypes.disabled,
    invalid: textInputArgTypes.invalid,
    readOnly: textInputArgTypes.readOnly,
    required: textInputArgTypes.required,
  },
};

export const DateInputField: React.FC<IDateInputFieldProps> = (args: IDateInputFieldProps) => {
  const fieldArgs = extractArgs(args, fieldArgTypes);
  const TextInputArgs = extractArgs(args, textInputArgTypes);
  return (
    <Field {...fieldArgs} className="rvo-dateinput">
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
