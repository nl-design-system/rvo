import { defaultArgs as fieldDefaultArgs } from '../../form-field/css/defaultArgs';
import { defaultArgs as TimeInputDefaultArgs } from '../../form-timeinput/css/defaultArgs';
import { ITimeInputFieldProps } from './template';

export const defaultArgs: ITimeInputFieldProps = { ...fieldDefaultArgs, ...TimeInputDefaultArgs };
