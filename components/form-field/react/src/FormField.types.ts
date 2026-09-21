import { IExpandableContentProps } from '@nl-rvo/components/expandable-content/react/src';
import { ReactNode } from 'react';

export interface IFieldProps {
  id: string;
  label: string;
  labelSize?: 'sm' | 'md';
  labelType?: 'default' | 'optional' | 'required';
  helperText?: ReactNode | undefined;
  helperTextId?: string;
  warningText?: string;
  errorText?: string;
  className?: string;
  children: React.ReactElement<{ id: string }>;
  expandableHelperText?: IExpandableContentProps;
}
