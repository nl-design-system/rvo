/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { Field, argTypes as fieldArgTypes, FieldPropsWithoutFieldId } from '../form-field';
import { ITextareaProps, Textarea, argTypes as textareaArgTypes } from '../form-textarea';
import { extractArgs, extractOtherArgs } from '../../utils/extractArgs';

export interface ITextareaFieldProps extends FieldPropsWithoutFieldId, ITextareaProps {}

export const argTypes = { ...fieldArgTypes, ...textareaArgTypes };

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
