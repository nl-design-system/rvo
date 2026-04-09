/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { extractArgs, extractOtherArgs } from '../../utils/extractArgs';
import { Field, argTypes as fieldArgTypes, FieldPropsWithoutFieldId } from '../form-field';
import { ITextInputProps, TextInput } from '../form-textinput';
import { defaultArgs as textInputDefaultArgs } from '../form-textinput/defaultArgs';

const textInputArgTypes = {
  ...Object.fromEntries(Object.keys(textInputDefaultArgs).map((key) => [key, {}])),
  defaultValue: {},
  value: {},
  onFocus: {},
  onBlur: {},
  onChange: {},
  onClick: {},
  onInput: {},
  onInvalid: {},
};

export interface ITextInputFieldProps extends FieldPropsWithoutFieldId, ITextInputProps {}

export const TextInputField: React.FC<ITextInputFieldProps & React.HTMLAttributes<HTMLInputElement>> = (args) => {
  const fieldArgs = extractArgs(args, fieldArgTypes) as FieldPropsWithoutFieldId;
  const textInputArgs = extractArgs(args, textInputArgTypes) as ITextInputProps;

  const fieldArgsWithOtherAttributes = extractOtherArgs(args, { ...fieldArgTypes, ...textInputArgTypes });

  return (
    <Field {...fieldArgs} fieldId={textInputArgs.id} {...fieldArgsWithOtherAttributes}>
      <TextInput {...textInputArgs} aria-describedby={fieldArgs.helperTextId} />
    </Field>
  );
};

export default TextInputField;
