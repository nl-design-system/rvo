import { HTMLAttributes } from 'react';

export interface IFileInputProps extends HTMLAttributes<HTMLInputElement> {
  id?: string;
  disabled?: boolean;
  invalid?: boolean;
  required?: boolean;
  accept?: string;
  multiple?: boolean;
}
