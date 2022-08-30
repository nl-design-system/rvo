/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import '@utrecht/component-library-css';
import clsx from 'clsx';
import React from 'react';
import { StatusIcon } from '../../status-icon/css/template';
import validateHTML from '../../utils/validateHTML';

export interface IAlertProps {
  kind?: string;
  heading?: string;
  content?: string | React.ReactNode;
  closable?: boolean;
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
};

export const defaultArgs: IAlertProps = {
  kind: 'info',
  heading: '',
  content: 'This is an example of an alert.',
  closable: false,
};

export const Alert: React.FC<IAlertProps> = ({
  kind = defaultArgs.kind,
  heading = defaultArgs.heading,
  content = defaultArgs.content,
  closable = defaultArgs.closable,
}) => {
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

  // Parse content markup (either a string, HTML string or React node)
  let contentMarkup = <div>{content}</div>;
  if (typeof content === 'string' && content.length && validateHTML(content)) {
    contentMarkup = <div dangerouslySetInnerHTML={{ __html: content }}></div>;
  }

  return (
    <div className={clsx('rvo-alert', `rvo-alert--${kind}`)}>
      {iconMarkup}
      <div className="rvo-alert-text">
        {heading?.length > 0 && <strong>{heading}</strong>}
        {contentMarkup}
      </div>
      {closable && (
        <button className="utrecht-button rvo-button--close">
          <div className="rvo-icon rvo-icon-kruis rvo-icon--md rvo-icon--zwart"></div>
        </button>
      )}
    </div>
  );
};

export const AllAlertKinds: React.FC<IAlertProps> = (alertArgs) => (
  <div>
    <p>
      <Alert {...alertArgs} kind="info" />
    </p>
    <p>
      <Alert {...alertArgs} kind="warning" />
    </p>
    <p>
      <Alert {...alertArgs} kind="error" />
    </p>
    <p>
      <Alert {...alertArgs} kind="success" />
    </p>
  </div>
);
