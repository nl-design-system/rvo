import { ISelectFieldProps } from './template';
import { defaultArgs as fieldDefaultArgs } from '../../form-field/src/defaultArgs';
import { defaultArgs as selectDefaultArgs } from '../../form-select/src/defaultArgs';

export const defaultArgs: ISelectFieldProps = {
  ...fieldDefaultArgs,
  ...selectDefaultArgs,
};
