/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import {
  argTypes as radioButtonArgTypes,
  defaultArgs as radioButtonDefaultArgs,
  RadioButtonGroup,
} from '../../form-radio-button/css/template.group';
import extractArgs from '../../utils/extractArgs';
import { Field, argTypes as fieldArgTypes, defaultArgs as fieldDefaultArgs } from './template';

export const argTypes = { ...fieldArgTypes, ...radioButtonArgTypes };

export const defaultArgs = { ...fieldDefaultArgs, ...radioButtonDefaultArgs };

export const RadioButtonField = (args) => {
  const fieldArgs = extractArgs(args, fieldArgTypes);
  const radioButtonArgs = extractArgs(args, radioButtonArgTypes);
  return Field({ ...fieldArgs, formControlMarkup: RadioButtonGroup(radioButtonArgs) });
};
