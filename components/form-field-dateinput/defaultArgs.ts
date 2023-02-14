import { defaultArgs as dateInputDefaultArgs } from '../form-dateinput/defaultArgs';
import { defaultArgs as fieldDefaultArgs } from '../form-field/defaultArgs';
import { IDateInputFieldProps } from './template';

export const defaultArgs: IDateInputFieldProps = { ...fieldDefaultArgs, ...dateInputDefaultArgs };
