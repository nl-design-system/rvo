import { ITimeInputFieldProps } from './template';
import { defaultArgs as fieldDefaultArgs } from '../../form-field/src/defaultArgs';
import { defaultArgs as TimeInputDefaultArgs } from '../../form-timeinput/src/defaultArgs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { fieldId, ...restFieldArgs } = fieldDefaultArgs;
export const defaultArgs: ITimeInputFieldProps = { ...restFieldArgs, ...TimeInputDefaultArgs };
