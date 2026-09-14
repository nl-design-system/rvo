import { ReactNode } from 'react';

export interface ILabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  id?: string;
  htmlFor?: string;
  small?: boolean;
  type?: 'default' | 'optional' | 'required';
  className?: string;
  children?: ReactNode | string;
}
