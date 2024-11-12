/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { Field, argTypes as fieldArgTypes, IFieldProps } from '../form-field/template';
import { ITextareaProps, Textarea, argTypes as textareaArgTypes } from '../form-textarea/template';
import extractArgs from '../utils/extractArgs';

export interface ITextareaFieldProps extends IFieldProps, ITextareaProps {}

export const argTypes = { ...fieldArgTypes, ...textareaArgTypes };

export const TextareaField: React.FC<ITextareaFieldProps> = (args: ITextareaFieldProps) => {
  const fielArgs = extractArgs(args, fieldArgTypes) as IFieldProps;
  const textareaArgs = extractArgs(args, textareaArgTypes);
  return (
    <Field {...fielArgs}>
      <Textarea {...textareaArgs} aria-describedby={fielArgs.helperTextId} />
    </Field>
  );
};

export default TextareaField;
