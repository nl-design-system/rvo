import React, { ReactNode } from 'react';

export interface IDialogProps extends Omit<React.HTMLAttributes<HTMLDialogElement>, 'className'> {
  children?: ReactNode;
  actionGroup?: ReactNode;
  type?: 'centered-dialog' | 'inset-inline-start' | 'inset-inline-end';
  isModal?: boolean;
  centeredDialogSize?: 'sm' | 'md' | 'lg' | 'xl';
  backgroundColor?: 'wit' | 'grijs-200';
  isOpen?: boolean;
  onClose?: () => void;
  className?: string | string[];
  ariaLabel?: string;
  closeButtonLabel?: string;
}
