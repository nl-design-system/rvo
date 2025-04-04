/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { Field, argTypes as fieldArgTypes, IFieldProps } from '../../form-field/src/template';
import { ITextInputProps, TextInput, argTypes as textInputArgTypes } from '../../form-textinput/src/template';
import extractArgs from '../../utils/extractArgs';

export interface ITextInputFieldProps extends IFieldProps, ITextInputProps {}

export const argTypes = { ...fieldArgTypes, ...textInputArgTypes };

export const TextInputField: React.FC<ITextInputFieldProps> = (args: ITextInputFieldProps) => {
  const fielArgs = extractArgs(args, fieldArgTypes) as IFieldProps;
  const textInputArgs = extractArgs(args, textInputArgTypes);
  return (
    <Field {...fielArgs}>
      <TextInput {...textInputArgs} aria-describedby={fielArgs.helperTextId} />
    </Field>
  );
};

export default TextInputField;
