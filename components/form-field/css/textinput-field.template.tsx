/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import {
  ITextInputProps,
  TextInput,
  argTypes as textInputArgTypes,
  defaultArgs as textInputDefaultArgs,
} from '../../form-textinput/css/template';
import extractArgs from '../../utils/extractArgs';
import { defaultArgs as fieldDefaultArgs } from './defaultArgs';
import { Field, argTypes as fieldArgTypes, IFieldProps } from './template';
import './index.scss';

export interface ITextInputFieldProps extends IFieldProps, ITextInputProps {}

export const argTypes = { ...fieldArgTypes, ...textInputArgTypes };

export const defaultArgs: ITextInputFieldProps = { ...fieldDefaultArgs, ...textInputDefaultArgs };

export const TextInputField: React.FC<ITextInputFieldProps> = (args) => {
  const fieldArgs = extractArgs(args, fieldArgTypes);
  const textInputArgs = extractArgs(args, textInputArgTypes);
  return (
    <Field {...fieldArgs}>
      <TextInput {...textInputArgs} />
    </Field>
  );
};
