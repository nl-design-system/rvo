/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { defaultArgs as fileInputDefaultArgs } from '../../form-fileinput/css/defaultArgs';
import { FileInput, argTypes as fileInputArgTypes, IFileInputProps } from '../../form-fileinput/css/template';
import extractArgs from '../../utils/extractArgs';
import { defaultArgs as fieldDefaultArgs } from './defaultArgs';
import { Field, argTypes as fieldArgTypes, IFieldProps } from './template';
import './index.scss';

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
