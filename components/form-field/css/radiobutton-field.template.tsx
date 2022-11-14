/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import {
  IRadioButtonGroupProps,
  argTypes as radioButtonArgTypes,
  defaultArgs as radioButtonDefaultArgs,
  RadioButtonGroup,
} from '../../form-radio-button/css/template.group';
import extractArgs from '../../utils/extractArgs';
import { defaultArgs as fieldDefaultArgs } from './defaultArgs';
import { Field, argTypes as fieldArgTypes, IFieldProps } from './template';
import './index.scss';

interface IRadioButtonFieldProps extends IFieldProps, IRadioButtonGroupProps {}

export const argTypes = { ...fieldArgTypes, ...radioButtonArgTypes };

export const defaultArgs: IRadioButtonFieldProps = { ...fieldDefaultArgs, ...radioButtonDefaultArgs };

export const RadioButtonField: React.FC<IRadioButtonFieldProps> = (args) => {
  const fieldArgs = extractArgs(args, fieldArgTypes);
  const radioButtonArgs = extractArgs(args, radioButtonArgTypes);
  return (
    <Field {...fieldArgs}>
      <RadioButtonGroup {...radioButtonArgs} />
    </Field>
  );
};
