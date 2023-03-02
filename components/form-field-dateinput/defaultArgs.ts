import { defaultArgs as fieldDefaultArgs } from '../form-field/defaultArgs';
import { defaultArgs as textInputDefaultArgs } from '../form-textinput/defaultArgs';
import { IDateInputFieldProps } from './template';

export const defaultArgs: IDateInputFieldProps = { ...fieldDefaultArgs, ...textInputDefaultArgs };
