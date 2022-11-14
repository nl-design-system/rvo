import { defaultArgs as fieldDefaultArgs } from '../../form-field/css/defaultArgs';
import { defaultArgs as textInputDefaultArgs } from '../../form-textinput/css/defaultArgs';
import { ITextInputFieldProps } from './template';

export const defaultArgs: ITextInputFieldProps = { ...fieldDefaultArgs, ...textInputDefaultArgs };
