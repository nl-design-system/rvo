import { defaultArgs as dateInputDefaultArgs } from '../../form-dateinput/css/defaultArgs';
import { defaultArgs as fieldDefaultArgs } from '../../form-field/css/defaultArgs';
import { IDateInputFieldProps } from './template';

export const defaultArgs: IDateInputFieldProps = { ...fieldDefaultArgs, ...dateInputDefaultArgs };
