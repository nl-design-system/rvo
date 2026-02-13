/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import clsx from 'clsx';
import React, { HTMLAttributes, ReactNode, SyntheticEvent, useState } from 'react';
import { defaultArgs } from './defaultArgs';
import { Button } from '../../button/src/template';
import { Icon } from '../../icon/src/template';
import { StatusIcon } from '../../status-icon/src/template';
import parseContentMarkup from '../../utils/parseContentMarkup';
import './index.scss';

export interface IAlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  kind?: 'info' | 'warning' | 'error' | 'success';
  heading?: string;
  /** @uxpinignoreprop */
  content?: string | React.ReactNode;
  closable?: boolean;
  padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** @uxpinpropname Content */
  children?: ReactNode | undefined;
  onClose?: (event: SyntheticEvent<HTMLButtonElement>) => void;
  maxWidth?: 'sm' | 'md' | 'lg';
}

export const argTypes = {
  kind: {
    options: ['info', 'warning', 'error', 'success'],
    control: { type: 'radio' },
  },
  heading: {
    control: 'text',
  },
  content: {
    control: 'text',
  },
  closable: {
    control: 'boolean',
  },
  padding: {
    options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    control: { type: 'radio' },
  },
  children: {
    table: {
      disable: true,
    },
  },
  onClose: {
    table: {
      disable: true,
    },
  },
};

export const Alert: React.FC<IAlertProps> = ({
  kind = defaultArgs.kind,
  heading = defaultArgs.heading,
  content = defaultArgs.content,
  closable = defaultArgs.closable,
  padding = defaultArgs.padding,
  onClose,
  children,
  maxWidth,
  ...props
}: IAlertProps) => {
  // State to control the visibility of the alert
  const [isVisible, setIsVisible] = useState(true);

  // Function to handle the close event
  const handleClose = (event: SyntheticEvent<HTMLButtonElement>) => {
    setIsVisible(false);
    if (onClose) {
      onClose(event);
    }
  };

  // If the alert is not visible, return null to hide it
  if (!isVisible) return null;

  let iconMarkup;
  switch (kind) {
    case 'info':
      iconMarkup = StatusIcon({ type: 'info', size: 'xl' });
      break;
    case 'warning':
      iconMarkup = StatusIcon({ type: 'waarschuwing', size: 'xl' });
      break;
    case 'error':
      iconMarkup = StatusIcon({ type: 'foutmelding', size: 'xl' });
      break;
    case 'success':
      iconMarkup = StatusIcon({ type: 'bevestiging', size: 'xl' });
      break;
  }

  // Parse content markup (either a string, HTML string, React node or children)
  const contentMarkup: string | React.ReactNode = parseContentMarkup(children || content);

  return (
    <div
      className={clsx(
        'rvo-alert',
        `rvo-alert--${kind}`,
        padding && `rvo-alert--padding-${padding}`,
        maxWidth && 'rvo-alert--layout',
      )}
      {...props}
    >
      <div className={clsx('rvo-alert__container', maxWidth && `rvo-max-width-layout--${maxWidth}`)}>
        {iconMarkup}
        <div className="rvo-alert-text">
          {heading && heading !== '' && <strong>{heading}</strong>}
          <div>{contentMarkup}</div>
        </div>
        {closable && (
          <Button
            kind="subtle"
            className="rvo-button__close"
            label={<Icon icon="kruis" size="sm" color="zwart" />}
            aria-label="Sluiten"
            onClick={handleClose}
          />
        )}
      </div>
    </div>
  );
};

export const AllAlertKinds: React.FC<IAlertProps> = (alertArgs) => (
  <div className="rvo-layout-column rvo-layout-gap--md">
    <Alert {...alertArgs} kind="info" />
    <Alert {...alertArgs} kind="warning" />
    <Alert {...alertArgs} kind="error" />
    <Alert {...alertArgs} kind="success" />
  </div>
);

export default Alert;
