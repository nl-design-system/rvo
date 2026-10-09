import { ReactNode } from 'react';
import { ICheckboxProps } from '@nl-rvo/react-form-checkbox';

export interface ICheckboxGroupProps {
  invalid?: boolean;
  options?: ICheckboxProps[];
  onChange?: (currentGroupSelection: string[]) => void;
  currentSelection?: string[];
  children?: ReactNode | undefined;
}
