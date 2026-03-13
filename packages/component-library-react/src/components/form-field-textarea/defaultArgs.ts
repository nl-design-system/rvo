import { ITextareaFieldProps } from './';
import { defaultArgs as fieldDefaultArgs } from '../form-field/defaultArgs';
import { defaultArgs as textareaDefaultArgs } from '../form-textarea/defaultArgs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { fieldId, ...restFieldArgs } = fieldDefaultArgs;
export const defaultArgs: ITextareaFieldProps = { ...restFieldArgs, ...textareaDefaultArgs };
