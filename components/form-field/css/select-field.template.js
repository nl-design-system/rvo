/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { Select } from '../../form-select/css/template';
import { Field } from './template';
export { argTypes, defaultArgs } from './template';

export const SelectField = (args) => {
  return Field({ ...args, formControlMarkup: Select({ id: args.fieldId, invalid: args.errorText.length }) });
};
