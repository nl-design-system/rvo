/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import {
  FileInput,
  argTypes as fileInputArgTypes,
  defaultArgs as fileInputDefaultArgs,
  IFileInputProps,
} from '../../form-fileinput/css/template';
import extractArgs from '../../utils/extractArgs';
import { Field, argTypes as fieldArgTypes, defaultArgs as fieldDefaultArgs, IFieldProps } from './template';

interface IFileInputFieldProps extends IFieldProps, IFileInputProps {}

export const argTypes = { ...fieldArgTypes, ...fileInputArgTypes };

export const defaultArgs: IFileInputFieldProps = { ...fieldDefaultArgs, ...fileInputDefaultArgs };

export const FileInputField: React.FC<IFileInputFieldProps> = (args) => {
  const fieldArgs = extractArgs(args, fieldArgTypes);
  const fileInputArgs = extractArgs(args, fileInputArgTypes);
  return (
    <Field {...fieldArgs}>
      <FileInput {...fileInputArgs} />
    </Field>
  );
};
