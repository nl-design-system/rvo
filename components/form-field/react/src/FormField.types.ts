import { ReactNode } from 'react';

export interface IFieldProps {
  fieldId?: string;
  label?: string;
  labelSize?: 'sm' | 'md';
  labelType?: 'default' | 'optional' | 'required';
  helperText?: ReactNode | undefined;
  helperTextId?: string;
  expandableHelperText?: boolean;
  expandableHelperTextTitle?: string;
  warningText?: string;
  errorText?: string;
  className?: string;
  children?: ReactNode | undefined;
}
