/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { Button, ButtonKind } from '../../button/css/template';
import { Icon } from '../../icon/css/template';
import { Link } from '../../link/css/template';
import { StatusIcon } from '../../status-icon/css/template';
import validateHTML from '../../utils/validateHTML';
import './index.scss';

enum AlertKind {
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
  Success = 'success',
}

export interface IAlertProps {
  kind?: AlertKind;
  heading?: string;
  /** @uxpinignoreprop */
  content?: string | React.ReactNode;
  closable?: boolean;
  /** @uxpinpropname content */
  children?: ReactNode | undefined;
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

const linkMarkup = ReactDOMServer.renderToStaticMarkup(Link({ content: 'link', url: '#' }));

export const defaultArgs: IAlertProps = {
  kind: AlertKind.Info,
  heading: '',
  content: `This is an example of an alert, with a ${linkMarkup} inside.`,
  closable: false,
};

export const Alert: React.FC<IAlertProps> = ({
  kind = defaultArgs.kind,
  heading = defaultArgs.heading,
  content = defaultArgs.content,
  closable = defaultArgs.closable,
  children,
}: IAlertProps) => {
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
  let contentMarkup = children || <div>{content}</div>;
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
        <Button kind={ButtonKind.Subtle} classNames={['rvo-button--close']}>
          <Icon icon="kruis" size="md" />
        </Button>
      )}
    </div>
  );
};

export const AllAlertKinds: React.FC<IAlertProps> = (alertArgs) => (
  <div className="rvo-layout-column rvo-layout-gap--md">
    <Alert {...alertArgs} kind={AlertKind.Info} />
    <Alert {...alertArgs} kind={AlertKind.Warning} />
    <Alert {...alertArgs} kind={AlertKind.Error} />
    <Alert {...alertArgs} kind={AlertKind.Success} />
  </div>
);

export default Alert;
