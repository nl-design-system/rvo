import { defaultArgs as fieldDefaultArgs } from '../form-field/defaultArgs';
import { defaultArgs as selectDefaultArgs } from '../form-select/defaultArgs';
import { ISelectFieldProps } from './template';

export const defaultArgs: ISelectFieldProps = {
  ...fieldDefaultArgs,
  ...selectDefaultArgs,
};
