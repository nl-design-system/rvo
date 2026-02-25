import { ITextInputFieldProps } from './';
import { defaultArgs as fieldDefaultArgs } from '../form-field/defaultArgs';
import { defaultArgs as textInputDefaultArgs } from '../form-textinput/defaultArgs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { fieldId, ...restFieldArgs } = fieldDefaultArgs;
export const defaultArgs: ITextInputFieldProps = { ...restFieldArgs, ...textInputDefaultArgs };
