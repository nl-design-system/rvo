import { defaultArgs as fieldDefaultArgs } from '../form-field/defaultArgs';
import { defaultArgs as TimeInputDefaultArgs } from '../form-timeinput/defaultArgs';
import { ITimeInputFieldProps } from './template';

export const defaultArgs: ITimeInputFieldProps = { ...fieldDefaultArgs, ...TimeInputDefaultArgs };
