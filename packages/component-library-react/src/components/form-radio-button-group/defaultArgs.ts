import { HTMLAttributes } from 'react';
import { IRadioButtonGroupProps } from './';
import { IRadioButtonProps } from '../form-radio-button';

const defaultOptions: IRadioButtonProps[] = [
  { id: 'optionA', label: 'Option A' },
  { id: 'optionB', label: 'Option B' },
  { id: 'optionC', label: 'Option C' },
  { id: 'optionD', label: 'Option D' },
];

export const defaultArgs: IRadioButtonGroupProps & HTMLAttributes<HTMLDivElement> = {
  name: 'group',
  invalid: false,
  options: defaultOptions,
};
