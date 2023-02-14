import { defaultArgs as checkboxGroupDefaultArgs } from '../form-checkbox-group/defaultArgs';
import { defaultArgs as fieldDefaultArgs } from '../form-field/defaultArgs';
import { ICheckboxFieldProps } from './template';

export const defaultArgs: ICheckboxFieldProps = {
  ...fieldDefaultArgs,
  ...checkboxGroupDefaultArgs,
};
