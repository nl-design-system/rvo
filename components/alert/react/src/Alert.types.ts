import { HTMLAttributes, SyntheticEvent } from 'react';

export interface IAlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  kind?: 'info' | 'warning' | 'error' | 'success';
  heading?: string;
  content?: string | React.ReactNode;
  closable?: boolean;
  padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  onClose?: (event: SyntheticEvent<HTMLButtonElement>) => void;
  maxWidth?: 'sm' | 'md' | 'lg';
}
