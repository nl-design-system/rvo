import { IDateInputFieldProps } from './template';
import { defaultArgs as DateInputDefaultArgs } from '../../form-dateinput/src/defaultArgs';
import { defaultArgs as fieldDefaultArgs } from '../../form-field/src/defaultArgs';

export const defaultArgs: IDateInputFieldProps = { ...fieldDefaultArgs, ...DateInputDefaultArgs };
