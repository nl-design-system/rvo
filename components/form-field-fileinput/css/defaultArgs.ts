import { defaultArgs as fieldDefaultArgs } from '../../form-field/css/defaultArgs';
import { defaultArgs as fileInputDefaultArgs } from '../../form-fileinput/css/defaultArgs';
import { IFileInputFieldProps } from './template';

export const defaultArgs: IFileInputFieldProps = {
  ...fieldDefaultArgs,
  ...fileInputDefaultArgs,
};
