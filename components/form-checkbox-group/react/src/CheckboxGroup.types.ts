import React, { ReactNode } from 'react';
import { ICheckboxProps } from '@nl-rvo/react-form-checkbox';

export interface ICheckboxGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  invalid?: boolean;
  options?: ICheckboxProps[];
  onChange?: (currentGroupSelection: string[]) => void;
  currentSelection?: string[];
  children?: ReactNode | undefined;
}
