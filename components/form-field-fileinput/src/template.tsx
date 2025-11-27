/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { Field, argTypes as fieldArgTypes, FieldPropsWithoutFieldId } from '../../form-field/src/template';
import { FileInput, argTypes as fileInputArgTypes, IFileInputProps } from '../../form-fileinput/src/template';
import { extractArgs, extractOtherArgs } from '../../utils/extractArgs';

export interface IFileInputFieldProps extends FieldPropsWithoutFieldId, IFileInputProps {}

export const argTypes = { ...fieldArgTypes, ...fileInputArgTypes };

export const FileInputField: React.FC<IFileInputFieldProps> = (args: IFileInputFieldProps) => {
  const fieldArgs = extractArgs(args, fieldArgTypes) as FieldPropsWithoutFieldId;
  const fileInputArgs = extractArgs(args, fileInputArgTypes) as IFileInputProps;

  const fieldArgsWithOtherAttributes = extractOtherArgs(args, { ...fieldArgTypes, ...fileInputArgTypes });

  return (
    <Field {...fieldArgs} fieldId={fileInputArgs.id} {...fieldArgsWithOtherAttributes}>
      <FileInput {...fileInputArgs} aria-describedby={fieldArgs.helperTextId} />
    </Field>
  );
};

export default FileInputField;
