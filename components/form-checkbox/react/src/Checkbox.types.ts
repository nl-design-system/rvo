export interface ICheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  label: string;
  checked?: boolean;
  hover?: boolean;
  disabled?: boolean;
  active?: boolean;
  focus?: boolean;
  indeterminate?: boolean;
  invalid?: boolean;
  required?: boolean;
  helperTextId?: string;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onInvalid?: (event: React.InvalidEvent<HTMLInputElement>) => void;
  onUpdateGroup?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
