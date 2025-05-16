/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { Field, argTypes as fieldArgTypes, FieldPropsWithoutFieldId } from '../../form-field/src/template';
import { ITextareaProps, Textarea, argTypes as textareaArgTypes } from '../../form-textarea/src/template';
import extractArgs from '../../utils/extractArgs';

export interface ITextareaFieldProps extends FieldPropsWithoutFieldId, ITextareaProps {}

export const argTypes = { ...fieldArgTypes, ...textareaArgTypes };

export const TextareaField: React.FC<ITextareaFieldProps> = (args: ITextareaFieldProps) => {
  const fieldArgs = extractArgs(args, fieldArgTypes) as FieldPropsWithoutFieldId;
  const textareaArgs = extractArgs(args, textareaArgTypes) as ITextareaProps;
  return (
    <Field {...fieldArgs} fieldId={textareaArgs.id}>
      <Textarea {...textareaArgs} aria-describedby={fieldArgs.helperTextId} />
    </Field>
  );
};

export default TextareaField;
