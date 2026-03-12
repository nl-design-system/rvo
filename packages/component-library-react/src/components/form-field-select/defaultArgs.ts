import { ISelectFieldProps } from './';
import { defaultArgs as fieldDefaultArgs } from '../form-field/defaultArgs';
import { defaultArgs as selectDefaultArgs } from '../form-select/defaultArgs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { fieldId, ...restFieldArgs } = fieldDefaultArgs;
export const defaultArgs: ISelectFieldProps = { ...restFieldArgs, ...selectDefaultArgs };
