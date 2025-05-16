import { IDateInputFieldProps } from './template';
import { defaultArgs as DateInputDefaultArgs } from '../../form-dateinput/src/defaultArgs';
import { defaultArgs as fieldDefaultArgs } from '../../form-field/src/defaultArgs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { fieldId, ...restFieldArgs } = fieldDefaultArgs;
export const defaultArgs: IDateInputFieldProps = { ...restFieldArgs, ...DateInputDefaultArgs };
