import { IDateInputFieldProps } from './';
import { defaultArgs as DateInputDefaultArgs } from '../form-dateinput/defaultArgs';
import { defaultArgs as fieldDefaultArgs } from '../form-field/defaultArgs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { fieldId, ...restFieldArgs } = fieldDefaultArgs;
export const defaultArgs: IDateInputFieldProps = { ...restFieldArgs, ...DateInputDefaultArgs };
