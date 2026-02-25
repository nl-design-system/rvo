import { ITimeInputFieldProps } from './';
import { defaultArgs as fieldDefaultArgs } from '../form-field/defaultArgs';
import { defaultArgs as TimeInputDefaultArgs } from '../form-timeinput/defaultArgs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { fieldId, ...restFieldArgs } = fieldDefaultArgs;
export const defaultArgs: ITimeInputFieldProps = { ...restFieldArgs, ...TimeInputDefaultArgs };
