/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { TextInput } from '../../form-textinput/css/template';
import { Field } from './template';
export { argTypes, defaultArgs } from './template';

export const TextInputField = (args) => {
  return Field({ ...args, formControlMarkup: TextInput({ id: args.fieldId, invalid: args.errorText.length }) });
};
