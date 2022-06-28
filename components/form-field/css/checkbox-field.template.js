/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import {
  argTypes as checkboxArgTypes,
  defaultArgs as checkboxDefaultArgs,
  CheckboxGroup,
} from '../../form-checkbox/css/template.group';
import extractArgs from '../../utils/extractArgs';
import { Field, argTypes as fieldArgTypes, defaultArgs as fieldDefaultArgs } from './template';

export const argTypes = { ...fieldArgTypes, ...checkboxArgTypes };

export const defaultArgs = { ...fieldDefaultArgs, ...checkboxDefaultArgs };

export const CheckboxField = (args) => {
  const fieldArgs = extractArgs(args, fieldArgTypes);
  const checkboxArgs = extractArgs(args, checkboxArgTypes);
  return Field({ ...fieldArgs, formControlMarkup: CheckboxGroup(checkboxArgs) });
};
