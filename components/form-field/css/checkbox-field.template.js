/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { CheckboxGroup } from '../../form-checkbox/css/template.group';
import { Field } from './template';
export { argTypes, defaultArgs } from './template';

export const CheckboxField = (args) => {
  return Field({
    ...args,
    formControlMarkup: CheckboxGroup({ invalid: args.errorText.length }),
  });
};
