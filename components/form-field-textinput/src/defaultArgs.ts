import { ITextInputFieldProps } from './template';
import { defaultArgs as fieldDefaultArgs } from '../../form-field/src/defaultArgs';
import { defaultArgs as textInputDefaultArgs } from '../../form-textinput/src/defaultArgs';

export const defaultArgs: ITextInputFieldProps = { ...fieldDefaultArgs, ...textInputDefaultArgs };
