import { IconType } from '@nl-rvo/react-icon';

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  kind?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'subtle' | 'warning-subtle' | 'warning';
  size?: 'xs' | 'sm' | 'md';
  label: string | React.ReactNode;
  disabled?: boolean;
  showIcon?: 'before' | 'after';
  icon?: IconType;
  iconAriaLabel?: string;
  busy?: boolean;
  fullWidth?: boolean;
  className?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
