import { ITextInputProps } from './template';

export const defaultArgs: ITextInputProps = {
  id: 'field',
  type: 'text',
  disabled: false,
  focus: false,
  invalid: false,
  readOnly: false,
  required: false,
  placeholder: '',
  value: '',
  prefix: '',
  suffix: '',
  size: 'lg',
  maxLength: undefined,
};
