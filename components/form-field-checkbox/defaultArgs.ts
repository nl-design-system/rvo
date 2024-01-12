import { ICheckboxFieldProps } from './template';
import { defaultArgs as checkboxGroupDefaultArgs } from '../form-checkbox-group/defaultArgs';
import { defaultArgs as fieldDefaultArgs } from '../form-field/defaultArgs';

export const defaultArgs: ICheckboxFieldProps = {
  ...fieldDefaultArgs,
  ...checkboxGroupDefaultArgs,
};
