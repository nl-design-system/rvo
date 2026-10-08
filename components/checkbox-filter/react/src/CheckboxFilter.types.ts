import React from 'react';
import { ICheckboxProps } from '@nl-rvo/react-form-checkbox';
import { HTMLAttributes } from 'react';

export interface ICheckboxFilter extends HTMLAttributes<HTMLDetailsElement> {
  label: string;
  options: ICheckboxProps[];
  optionsOnChange: (currentGroupSelection: string[]) => void;
  limit?: number;
  showInputField?: boolean;
  inputFieldLabel?: string;
  inputFieldOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  showMoreText?: string;
  showLessText?: string;
  noFiltersText?: string;
  initialCollapseState?: 'expanded' | 'collapsed';
}
