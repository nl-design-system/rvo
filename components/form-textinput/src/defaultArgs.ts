import { ITextInputProps } from './template';

export const defaultArgs: ITextInputProps = {
  id: 'field',
  disabled: false,
  focus: false,
  invalid: false,
  readOnly: false,
  required: false,
  placeholder: '',
  value: '',
  validation: 'text',
  prefix: '',
  suffix: '',
  size: 'lg',
  maxLength: undefined,
};