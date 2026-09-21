import { HTMLAttributes } from 'react';

export interface IRadioButtonProps extends HTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  label: string;
  checked?: boolean;
  hover?: boolean;
  disabled?: boolean;
  active?: boolean;
  focus?: boolean;
  invalid?: boolean;
  required?: boolean;
  onUpdateGroup?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
