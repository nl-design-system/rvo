import { ICheckboxProps } from '@nl-rvo/react-form-checkbox';

export interface ICheckboxFilter {
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
