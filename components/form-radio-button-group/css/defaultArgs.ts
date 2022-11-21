import { IRadioButtonProps } from '../../form-radio-button/css/template';
import { IRadioButtonGroupProps } from './template';

const defaultOptions: IRadioButtonProps[] = [
  { id: 'optionA', label: 'Option A' },
  { id: 'optionB', label: 'Option B' },
  { id: 'optionC', label: 'Option C' },
  { id: 'optionD', label: 'Option D' },
];

export const defaultArgs: IRadioButtonGroupProps = {
  name: 'group',
  invalid: false,
  options: defaultOptions,
};
