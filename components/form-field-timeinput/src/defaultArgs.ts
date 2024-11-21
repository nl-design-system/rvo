import { ITimeInputFieldProps } from './template';
import { defaultArgs as fieldDefaultArgs } from '../../form-field/src/defaultArgs';
import { defaultArgs as TimeInputDefaultArgs } from '../../form-timeinput/src/defaultArgs';

export const defaultArgs: ITimeInputFieldProps = { ...fieldDefaultArgs, ...TimeInputDefaultArgs };
