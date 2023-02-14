import { defaultArgs as fieldDefaultArgs } from '../form-field/defaultArgs';
import { defaultArgs as fileInputDefaultArgs } from '../form-fileinput/defaultArgs';
import { IFileInputFieldProps } from './template';

export const defaultArgs: IFileInputFieldProps = {
  ...fieldDefaultArgs,
  ...fileInputDefaultArgs,
};
