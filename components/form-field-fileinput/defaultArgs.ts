import { IFileInputFieldProps } from './template';
import { defaultArgs as fieldDefaultArgs } from '../form-field/defaultArgs';
import { defaultArgs as fileInputDefaultArgs } from '../form-fileinput/defaultArgs';

export const defaultArgs: IFileInputFieldProps = {
  ...fieldDefaultArgs,
  ...fileInputDefaultArgs,
};
