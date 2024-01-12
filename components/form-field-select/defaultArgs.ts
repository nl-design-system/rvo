import { ISelectFieldProps } from './template';
import { defaultArgs as fieldDefaultArgs } from '../form-field/defaultArgs';
import { defaultArgs as selectDefaultArgs } from '../form-select/defaultArgs';

export const defaultArgs: ISelectFieldProps = {
  ...fieldDefaultArgs,
  ...selectDefaultArgs,
};
