import { IFileInputFieldProps } from './';
import { defaultArgs as fieldDefaultArgs } from '../form-field/defaultArgs';
import { defaultArgs as fileInputDefaultArgs } from '../form-fileinput/defaultArgs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { fieldId, ...restFieldArgs } = fieldDefaultArgs;
export const defaultArgs: IFileInputFieldProps = { ...restFieldArgs, ...fileInputDefaultArgs };
