import { IFileInputFieldProps } from './template';
import { defaultArgs as fieldDefaultArgs } from '../../form-field/src/defaultArgs';
import { defaultArgs as fileInputDefaultArgs } from '../../form-fileinput/src/defaultArgs';

export const defaultArgs: IFileInputFieldProps = {
  ...fieldDefaultArgs,
  ...fileInputDefaultArgs,
};
