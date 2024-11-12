import { ITextareaFieldProps } from './template';
import { defaultArgs as fieldDefaultArgs } from '../form-field/defaultArgs';
import { defaultArgs as textareaDefaultArgs } from '../form-textarea/defaultArgs';

export const defaultArgs: ITextareaFieldProps = { ...fieldDefaultArgs, ...textareaDefaultArgs };
