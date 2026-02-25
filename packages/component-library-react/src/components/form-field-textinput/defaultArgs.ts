import { ITextInputFieldProps } from './';
import { defaultArgs as fieldDefaultArgs } from '../../form-field/src/defaultArgs';
import { defaultArgs as textInputDefaultArgs } from '../../form-textinput/src/defaultArgs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { fieldId, ...restFieldArgs } = fieldDefaultArgs;
export const defaultArgs: ITextInputFieldProps = { ...restFieldArgs, ...textInputDefaultArgs };
