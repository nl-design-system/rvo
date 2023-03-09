/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { Field, argTypes as fieldArgTypes, IFieldProps } from '../form-field/template';
import { ITextInputProps, TextInput, argTypes as textInputArgTypes } from '../form-textinput/template';
import extractArgs from '../utils/extractArgs';

export interface ITextInputFieldProps extends IFieldProps, ITextInputProps {}

export const argTypes = { ...fieldArgTypes, ...textInputArgTypes };

export const TextInputField: React.FC<ITextInputFieldProps> = (args: ITextInputFieldProps) => {
  const fieldArgs = extractArgs(args, fieldArgTypes) as IFieldProps;
  const textInputArgs = extractArgs(args, textInputArgTypes);
  return (
    <Field {...fieldArgs}>
      <TextInput {...textInputArgs} aria-describedby={fieldArgs.helperTextId?.length ? fieldArgs.helperTextId : null} />
    </Field>
  );
};

export default TextInputField;
