import { ISelectFieldProps } from './template';
import { defaultArgs as fieldDefaultArgs } from '../../form-field/src/defaultArgs';
import { defaultArgs as selectDefaultArgs } from '../../form-select/src/defaultArgs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { fieldId, ...restFieldArgs } = fieldDefaultArgs;
export const defaultArgs: ISelectFieldProps = { ...restFieldArgs, ...selectDefaultArgs };
