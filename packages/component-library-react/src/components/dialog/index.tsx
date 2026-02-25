/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { defaultArgs } from './defaultArgs';
import Button from '../button';
import { Icon } from '../icon';
import '@nl-rvo/css-dialog/dist/index.css';
import parseContentMarkup from '../../utils/parseContentMarkup';

interface DialogContextType {
  isOpen: boolean | undefined;
  onClose: () => void;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog must be used within Dialog component');
  }
  return context;
};

export interface IDialogProps extends Omit<React.HTMLAttributes<HTMLDialogElement>, 'className'> {
  type?: 'centered-dialog' | 'inset-inline-start' | 'inset-inline-end';
  isModal?: boolean;
  centeredDialogSize?: 'sm' | 'md' | 'lg' | 'xl';
  backgroundColor?: 'wit' | 'grijs-200';
  /** @uxpinpropname Content */
  children?: ReactNode | undefined;
  /** @uxpinpropname Action group content */
  actionGroup?: ReactNode | undefined;
  /** @uxpinignoreprop */
  content?: string;
  isOpen?: boolean;
  onClose?: () => void;
  /** @uxpinignoreprop */
  className?: string | string[];
  ariaLabel?: string;
  closeButtonLabel?: string;
}

export const argTypes = {
  type: {
    options: ['centered-dialog', 'inset-inline-start', 'inset-inline-end'],
    control: { type: 'radio' },
  },
  isModal: {
    control: 'boolean',
  },
  dialogSize: {
    options: ['sm', 'md', 'lg', 'xl'],
    control: { type: 'radio' },
  },
  backgroundColor: {
    options: ['wit', 'grijs-200'],
    control: { type: 'radio' },
  },
  children: {
    table: {
      disable: true,
    },
  },
  actionGroup: {
    table: {
      disable: true,
    },
  },
  content: {
    control: 'text',
  },
  isOpen: {
    control: 'boolean',
  },
  onClose: {
    action: 'onClose',
  },
  className: {
    control: 'text',
  },
  ariaLabel: {
    control: 'text',
  },
};

export const Dialog: React.FC<IDialogProps> = ({
  children,
  actionGroup,
  onClose,
  content = defaultArgs.content,
  isOpen: isOpenProp = defaultArgs.isOpen,
  type = defaultArgs.type,
  isModal = defaultArgs.isModal,
  centeredDialogSize = defaultArgs.centeredDialogSize,
  backgroundColor = defaultArgs.backgroundColor,
  className = defaultArgs.className,
  ariaLabel = defaultArgs.ariaLabel,
  closeButtonLabel = 'Sluiten',
  ...props
}: IDialogProps) => {
  const contentMarkup = parseContentMarkup(children ?? content);
  const [isOpen, setIsOpen] = useState(isOpenProp);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    onClose?.();
  }, [onClose]);

  useEffect(() => {
    setIsOpen(isOpenProp);
  }, [isOpenProp]);

  const contextValue = useMemo(
    () => ({
      isOpen,
      onClose: handleClose,
    }),
    [isOpen, handleClose],
  );

  const renderDialogContent = () => (
    <dialog
      className={clsx(
        'rvo-dialog',
        `rvo-dialog--${backgroundColor}`,
        !isModal && backgroundColor === 'wit' && 'rvo-dialog--outline',
        `rvo-dialog--${type}`,
        !!actionGroup && 'rvo-dialog__content--with-action-group',
        type === 'centered-dialog' && `rvo-dialog--centered-dialog--${centeredDialogSize}`,
        className,
      )}
      onClick={(e) => e.stopPropagation()}
      aria-expanded={isOpen}
      aria-label={ariaLabel}
      {...props}
    >
      <div className="rvo-dialog__close" onClick={handleClose}>
        <Button kind="subtle" className="rvo-dialog__close-button">
          <Icon icon="kruis" size="md" className="rvo-dialog__close-icon" />
          {closeButtonLabel}
        </Button>
      </div>
      <div className="rvo-dialog__content">{contentMarkup}</div>
      {actionGroup && <div className="rvo-dialog__action-group">{actionGroup}</div>}
    </dialog>
  );

  return (
    <DialogContext.Provider value={contextValue}>
      {isOpen &&
        (isModal ? (
          <div className={clsx('rvo-dialog__background')} onClick={handleClose}>
            {renderDialogContent()}
          </div>
        ) : (
          renderDialogContent()
        ))}
    </DialogContext.Provider>
  );
};

export default Dialog;
