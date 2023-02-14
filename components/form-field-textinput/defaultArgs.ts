import { defaultArgs as fieldDefaultArgs } from '../form-field/defaultArgs';
import { defaultArgs as textInputDefaultArgs } from '../form-textinput/defaultArgs';
import { ITextInputFieldProps } from './template';

export const defaultArgs: ITextInputFieldProps = { ...fieldDefaultArgs, ...textInputDefaultArgs };
