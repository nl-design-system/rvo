import { HTMLAttributes } from 'react';

export interface ISelectOption extends HTMLAttributes<HTMLOptionElement> {
  value: string;
  label: string;
}

export interface ISelectProps extends HTMLAttributes<HTMLSelectElement> {
  id?: string;
  disabled?: boolean;
  focus?: boolean;
  invalid?: boolean;
  required?: boolean;
  options?: ISelectOption[];
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'max';
  defaultValue?: string;
  value?: string;
}
