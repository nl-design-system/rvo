import { defaultArgs as fieldDefaultArgs } from '../../form-field/css/defaultArgs';
import { defaultArgs as selectDefaultArgs } from '../../form-select/css/defaultArgs';
import { ISelectFieldProps } from './template';

export const defaultArgs: ISelectFieldProps = {
  ...fieldDefaultArgs,
  ...selectDefaultArgs,
};
