import { IFileInputFieldProps } from './template';
import { defaultArgs as fieldDefaultArgs } from '../../form-field/src/defaultArgs';
import { defaultArgs as fileInputDefaultArgs } from '../../form-fileinput/src/defaultArgs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { fieldId, ...restFieldArgs } = fieldDefaultArgs;
export const defaultArgs: IFileInputFieldProps = { ...restFieldArgs, ...fileInputDefaultArgs };
