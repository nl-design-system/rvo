import { HTMLAttributes } from 'react';

export interface ITextInputProps extends HTMLAttributes<HTMLInputElement> {
  type: 'text' | 'password' | 'email' | 'tel' | 'url' | 'search' | 'number' | 'date' | 'time' | 'datetime-local';
  disabled?: boolean;
  focus?: boolean;
  invalid?: boolean;
  readOnly?: boolean;
  required?: boolean;
  placeholder?: string;
  validation?: 'none' | 'currency';
  prefix?: string;
  suffix?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'max';
  maxLength?: number | undefined;
  className?: string;
  defaultValue?: string | number | readonly string[];
  value?: string | number | readonly string[];
  autoComplete?: string;
  role?: string;
  min?: string;
  max?: string;
  step?: number;
}
