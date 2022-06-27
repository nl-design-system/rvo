/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { RadioButtonGroup } from '../../form-radio-button/css/template.group';
import { Field } from './template';
export { argTypes, defaultArgs } from './template';

export const RadioButtonField = (args) => {
  return Field({
    ...args,
    formControlMarkup: RadioButtonGroup({ name: args.fieldId, invalid: args.errorText.length }),
  });
};
