/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { Select, argTypes as selectArgTypes, defaultArgs as selectDefaultArgs } from '../../form-select/css/template';
import extractArgs from '../../utils/extractArgs';
import { Field, argTypes as fieldArgTypes, defaultArgs as fieldDefaultArgs } from './template';

export const argTypes = { ...fieldArgTypes, ...selectArgTypes };

export const defaultArgs = { ...fieldDefaultArgs, ...selectDefaultArgs };

export const SelectField = (args) => {
  const fieldArgs = extractArgs(args, fieldArgTypes);
  const selectArgs = extractArgs(args, selectArgTypes);
  return Field({ ...fieldArgs, formControlMarkup: Select(selectArgs) });
};
