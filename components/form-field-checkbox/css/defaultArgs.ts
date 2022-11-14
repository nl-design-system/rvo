import { defaultArgs as checkboxGroupDefaultArgs } from '../../form-checkbox-group/css/defaultArgs';
import { defaultArgs as fieldDefaultArgs } from '../../form-field/css/defaultArgs';
import { ICheckboxFieldProps } from './template';

export const defaultArgs: ICheckboxFieldProps = {
  ...fieldDefaultArgs,
  ...checkboxGroupDefaultArgs,
};
