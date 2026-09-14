import { ReactNode } from 'react';

export interface IDialogProps extends Omit<React.HTMLAttributes<HTMLDialogElement>, 'className'> {
  type?: 'centered-dialog' | 'inset-inline-start' | 'inset-inline-end';
  isModal?: boolean;
  centeredDialogSize?: 'sm' | 'md' | 'lg' | 'xl';
  backgroundColor?: 'wit' | 'grijs-200';
  children?: ReactNode | undefined;
  actionGroup?: ReactNode | undefined;
  content?: string;
  isOpen?: boolean;
  onClose?: () => void;
  className?: string | string[];
  ariaLabel?: string;
  closeButtonLabel?: string;
}
