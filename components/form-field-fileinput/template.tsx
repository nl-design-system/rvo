/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { Field, argTypes as fieldArgTypes, IFieldProps } from '../form-field/template';
import { FileInput, argTypes as fileInputArgTypes, IFileInputProps } from '../form-fileinput/template';
import extractArgs from '../utils/extractArgs';

export interface IFileInputFieldProps extends IFieldProps, IFileInputProps {}

export const argTypes = { ...fieldArgTypes, ...fileInputArgTypes };

export const FileInputField: React.FC<IFileInputFieldProps> = (args: IFileInputFieldProps) => {
  const fieldArgs = extractArgs(args, fieldArgTypes) as IFieldProps;
  const fileInputArgs = extractArgs(args, fileInputArgTypes);
  return (
    <Field {...fieldArgs}>
      <FileInput {...fileInputArgs} aria-describedby={fieldArgs.helperTextId?.length ? fieldArgs.helperTextId : null} />
    </Field>
  );
};

export default FileInputField;
