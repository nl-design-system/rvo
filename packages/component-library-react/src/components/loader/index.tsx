import '@nl-rvo/css-loader/dist/index.css';

import clsx from 'clsx';
import React from 'react';
import Button, { IButtonProps } from '../button';
import { Icon } from '../icon';
import StatusIcon from '../status-icon';

export interface ILoader {
  animateLoader?: boolean;
  overlay?: boolean;
  status?: ILoaderStatus;
  primaryAction?: IButtonProps;
  secondaryAction?: IButtonProps;
}

export interface ILoaderStatus {
  type: 'foutmelding' | 'waarschuwing';
  text: string;
}

export const Loader: React.FC<ILoader & React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { overlay, status, primaryAction, secondaryAction, animateLoader = true, ...rootElementProps } = props;

  return (
    <div className={clsx('rvo-loader', overlay && 'rvo-loader--overlay')} {...rootElementProps}>
      <span className={clsx('rvo-loader__icon', animateLoader && 'rvo-loader__icon--animated')}>
        <Icon icon="pijlen-in-cirkel-om-document" size="2xl" color="grijs-700" />
      </span>
      {status && (
        <p className="rvo-loader__warning">
          <StatusIcon type={status.type} size="sm" /> {status.text}
        </p>
      )}
      {(primaryAction || secondaryAction) && (
        <div className="rvo-loader__actions">
          {primaryAction && <Button kind="primary" size="xs" {...primaryAction} />}
          {secondaryAction && <Button kind="secondary" size="xs" {...secondaryAction} />}
        </div>
      )}
    </div>
  );
};

export default Loader;
