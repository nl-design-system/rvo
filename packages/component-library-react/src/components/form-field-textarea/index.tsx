/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { extractArgs, extractOtherArgs } from '../../utils/extractArgs';
import { Field, argTypes as fieldArgTypes, FieldPropsWithoutFieldId } from '../form-field';
import { ITextareaProps, Textarea } from '../form-textarea';
import { defaultArgs as textareaDefaultArgs } from '../form-textarea/defaultArgs';

const textareaArgTypes = {
  ...Object.fromEntries(Object.keys(textareaDefaultArgs).map((key) => [key, {}])),
  onFocus: {},
  onBlur: {},
  onChange: {},
  onClick: {},
  onInput: {},
  onInvalid: {},
};

export interface ITextareaFieldProps extends FieldPropsWithoutFieldId, ITextareaProps {}

export const TextareaField: React.FC<ITextareaFieldProps & React.HTMLAttributes<HTMLTextAreaElement>> = (args) => {
  const fieldArgs = extractArgs(args, fieldArgTypes) as FieldPropsWithoutFieldId;
  const textareaArgs = extractArgs(args, textareaArgTypes) as ITextareaProps;

  const fieldArgsWithOtherAttributes = extractOtherArgs(args, { ...fieldArgTypes, ...textareaArgTypes });

  return (
    <Field {...fieldArgs} fieldId={textareaArgs.id} {...fieldArgsWithOtherAttributes}>
      <Textarea {...textareaArgs} aria-describedby={fieldArgs.helperTextId} />
    </Field>
  );
};

export default TextareaField;
