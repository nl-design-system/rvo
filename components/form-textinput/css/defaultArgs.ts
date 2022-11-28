import { ITextInputProps } from './template';

export const defaultArgs: ITextInputProps = {
  id: 'field',
  disabled: false,
  focus: false,
  invalid: false,
  readOnly: false,
  required: false,
  inputType: 'text',
  placeholder: '',
  value: '',
  validation: 'text',
  prefix: '',
  suffix: '',
  size: 'lg',
  maxLength: null,
  maxLengthIndicator: true,
};
