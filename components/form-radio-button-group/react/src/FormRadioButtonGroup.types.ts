import { IRadioButtonProps } from '@nl-rvo/react-form-radio-button';
import { ReactNode } from 'react';

export interface IRadioButtonGroupProps {
  name?: string;
  invalid?: boolean;
  options?: IRadioButtonProps[];
  onChange?: (currentGroupSelection: number) => void;
  currentSelection?: number | null;
  children?: ReactNode;
}
