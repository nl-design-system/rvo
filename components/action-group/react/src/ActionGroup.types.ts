import { IButtonProps } from '@nl-rvo/react-button';

export interface IActionGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  buttonsLeft?: IButtonProps[];
  buttonsRight?: IButtonProps[];
  fullWidth?: boolean;
  position?: 'left' | 'right';
}
