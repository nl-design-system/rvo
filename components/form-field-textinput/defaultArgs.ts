import { ITextInputFieldProps } from './template';
import { defaultArgs as fieldDefaultArgs } from '../form-field/defaultArgs';
import { defaultArgs as textInputDefaultArgs } from '../form-textinput/defaultArgs';

export const defaultArgs: ITextInputFieldProps = { ...fieldDefaultArgs, ...textInputDefaultArgs };
