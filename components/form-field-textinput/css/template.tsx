/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { Field, argTypes as fieldArgTypes, IFieldProps } from '../../form-field/css/template';
import { ITextInputProps, TextInput, argTypes as textInputArgTypes } from '../../form-textinput/css/template';
import extractArgs from '../../utils/extractArgs';

export interface ITextInputFieldProps extends IFieldProps, ITextInputProps {}

export const argTypes = { ...fieldArgTypes, ...textInputArgTypes };

export const TextInputField: React.FC<ITextInputFieldProps> = (args: ITextInputFieldProps) => {
  const fieldArgs = extractArgs(args, fieldArgTypes);
  const textInputArgs = extractArgs(args, textInputArgTypes);
  return (
    <Field {...fieldArgs}>
      <TextInput {...textInputArgs} />
    </Field>
  );
};

export default TextInputField;