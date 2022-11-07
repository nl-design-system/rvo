/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import {
  ISelectProps,
  Select,
  argTypes as selectArgTypes,
  defaultArgs as selectDefaultArgs,
} from '../../form-select/css/template';
import extractArgs from '../../utils/extractArgs';
import { Field, argTypes as fieldArgTypes, defaultArgs as fieldDefaultArgs, IFieldProps } from './template';
import './index.scss';

interface ISelectFieldProps extends IFieldProps, ISelectProps {}

export const argTypes = { ...fieldArgTypes, ...selectArgTypes };

export const defaultArgs: ISelectFieldProps = { ...fieldDefaultArgs, ...selectDefaultArgs };

export const SelectField: React.FC<ISelectFieldProps> = (args) => {
  const fieldArgs = extractArgs(args, fieldArgTypes);
  const selectArgs = extractArgs(args, selectArgTypes);
  return (
    <Field {...fieldArgs}>
      <Select {...selectArgs} />
    </Field>
  );
};
