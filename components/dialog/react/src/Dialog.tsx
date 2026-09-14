/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import parseContentMarkup from '@nl-rvo/component-library-react/src/utils/parseContentMarkup';
import { Button } from '@nl-rvo/react-button';
import '@nl-rvo/css-dialog';
import { IDialogProps } from './Dialog.types';

interface DialogContextType {
  isOpen?: boolean;
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

export const Dialog: React.FC<IDialogProps> = ({
  children,
  actionGroup,
  onClose,
  content,
  isOpen: isOpenProp = false,
  type = 'centered-dialog',
  isModal,
  centeredDialogSize = 'md',
  backgroundColor = 'wit',
  className,
  ariaLabel,
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
        <Button kind="subtle" icon="kruis" showIcon="before" label={undefined}>
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
