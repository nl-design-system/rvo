import { ITextareaFieldProps } from './template';
import { defaultArgs as fieldDefaultArgs } from '../../form-field/src/defaultArgs';
import { defaultArgs as textareaDefaultArgs } from '../../form-textarea/src/defaultArgs';

export const defaultArgs: ITextareaFieldProps = { ...fieldDefaultArgs, ...textareaDefaultArgs };
