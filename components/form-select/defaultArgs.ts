import { ISelectOption, ISelectProps } from './template';

const defaultOptions: ISelectOption[] = [
  { value: '1', label: 'Option #1' },
  { value: '2', label: 'Option #2', selected: true },
  { value: '3', label: 'Option #3' },
];

export const defaultArgs: ISelectProps = {
  id: 'field',
  disabled: false,
  focus: false,
  invalid: false,
  required: false,
  options: defaultOptions,
};
