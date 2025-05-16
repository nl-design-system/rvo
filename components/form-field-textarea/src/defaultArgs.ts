import { ITextareaFieldProps } from './template';
import { defaultArgs as fieldDefaultArgs } from '../../form-field/src/defaultArgs';
import { defaultArgs as textareaDefaultArgs } from '../../form-textarea/src/defaultArgs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { fieldId, ...restFieldArgs } = fieldDefaultArgs;
export const defaultArgs: ITextareaFieldProps = { ...restFieldArgs, ...textareaDefaultArgs };
