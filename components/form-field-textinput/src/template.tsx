/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { Field, argTypes as fieldArgTypes, FieldPropsWithoutFieldId } from '../../form-field/src/template';
import { ITextInputProps, TextInput, argTypes as textInputArgTypes } from '../../form-textinput/src/template';
import extractArgs from '../../utils/extractArgs';

export interface ITextInputFieldProps extends FieldPropsWithoutFieldId, ITextInputProps {}

export const argTypes = { ...fieldArgTypes, ...textInputArgTypes };

export const TextInputField: React.FC<ITextInputFieldProps> = (args: ITextInputFieldProps) => {
  const fieldArgs = extractArgs(args, fieldArgTypes) as FieldPropsWithoutFieldId;
  const textInputArgs = extractArgs(args, textInputArgTypes) as ITextInputProps;
  return (
    <Field {...fieldArgs} fieldId={textInputArgs.id}>
      <TextInput {...textInputArgs} aria-describedby={fieldArgs.helperTextId} />
    </Field>
  );
};

export default TextInputField;
