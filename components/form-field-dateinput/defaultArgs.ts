import { IDateInputFieldProps } from './template';
import { defaultArgs as DateInputDefaultArgs } from '../form-dateinput/defaultArgs';
import { defaultArgs as fieldDefaultArgs } from '../form-field/defaultArgs';

export const defaultArgs: IDateInputFieldProps = { ...fieldDefaultArgs, ...DateInputDefaultArgs };
