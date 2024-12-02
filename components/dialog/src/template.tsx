/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { defaultArgs } from './defaultArgs';
import Heading from '../../heading/src/template';
import { Icon } from '../../icon/src/template';
import Link from '../../link/src/template';
import './index.scss';
import parseContentMarkup from '../../utils/parseContentMarkup';

export interface IDialogProps {
  title?: string;
  titleLink?: string;
  type?: 'centered-dialog' | 'drawer-left' | 'drawer-right';
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
}

export const argTypes = {
  title: {
    control: 'text',
  },
  titleLink: {
    control: 'text',
  },
  type: {
    options: ['centered-dialog', 'drawer-left', 'drawer-right'],
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
  title,
  actionGroup,
  content = defaultArgs.content,
  isOpen: isOpenArg = defaultArgs.isOpen,
  titleLink = defaultArgs.titleLink,
  type = defaultArgs.type,
  isModal = defaultArgs.isModal,
  centeredDialogSize = defaultArgs.centeredDialogSize,
  backgroundColor = defaultArgs.backgroundColor,
  className = defaultArgs.className,
  ariaLabel = defaultArgs.ariaLabel,
}: IDialogProps) => {
  const contentMarkup = parseContentMarkup(children ?? content);
  const [isOpen, setIsOpen] = useState(isOpenArg);

  const onClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    setIsOpen(isOpenArg);
  }, [isOpenArg]);

  const renderDialogContent = () => (
    <div
      className={clsx(
        'rvo-dialog',
        `rvo-dialog--${backgroundColor}`,
        `rvo-dialog--${type}`,
        type === 'centered-dialog' && `rvo-dialog--centered-dialog--${centeredDialogSize}`,
        className,
      )}
      onClick={(e) => e.stopPropagation()}
      aria-expanded={isOpen}
      aria-label={ariaLabel}
    >
      <Icon icon="kruis" size="md" className="rvo-dialog__close-icon" onClick={onClick} />
      {titleLink ? (
        <Link href={titleLink} color="zwart">
          {title && <Heading>{title}</Heading>}
        </Link>
      ) : (
        <Heading>{title}</Heading>
      )}
      <div className="rvo-dialog__content">{contentMarkup}</div>
      {actionGroup && <div className="rvo-dialog__action-group">{actionGroup}</div>}
    </div>
  );

  return (
    isOpen &&
    (isModal ? (
      <div className={clsx('rvo-dialog__background')} onClick={onClick}>
        {renderDialogContent()}
      </div>
    ) : (
      renderDialogContent()
    ))
  );
};

export default Dialog;
