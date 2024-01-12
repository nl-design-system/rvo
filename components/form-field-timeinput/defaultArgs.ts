import { ITimeInputFieldProps } from './template';
import { defaultArgs as fieldDefaultArgs } from '../form-field/defaultArgs';
import { defaultArgs as TimeInputDefaultArgs } from '../form-timeinput/defaultArgs';

export const defaultArgs: ITimeInputFieldProps = { ...fieldDefaultArgs, ...TimeInputDefaultArgs };
