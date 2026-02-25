import { ICheckboxFieldProps } from './';
import { defaultArgs as checkboxGroupDefaultArgs } from '../../form-checkbox-group/src/defaultArgs';
import { defaultArgs as fieldDefaultArgs } from '../../form-field/src/defaultArgs';

export const defaultArgs: ICheckboxFieldProps = {
  ...fieldDefaultArgs,
  ...checkboxGroupDefaultArgs,
};
