import { IRadioButtonProps } from '@nl-rvo/react-form-radio-button';
import React from 'react';

export interface IRadioButtonGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  name?: string;
  invalid?: boolean;
  options?: IRadioButtonProps[];
  onChange?: (currentGroupSelection: number) => void;
  currentSelection?: number | null;
}
