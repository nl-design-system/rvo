/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import {
  TextInput,
  argTypes as textInputArgTypes,
  defaultArgs as textInputDefaultArgs,
} from '../../form-textinput/css/template';
import extractArgs from '../../utils/extractArgs';
import { Field, argTypes as fieldArgTypes, defaultArgs as fieldDefaultArgs } from './template';

export const argTypes = { ...fieldArgTypes, ...textInputArgTypes };

export const defaultArgs = { ...fieldDefaultArgs, ...textInputDefaultArgs };

export const TextInputField = (args) => {
  const fieldArgs = extractArgs(args, fieldArgTypes);
  const textInputArgs = extractArgs(args, textInputArgTypes);
  return Field({ ...fieldArgs, formControlMarkup: TextInput(textInputArgs) });
};
