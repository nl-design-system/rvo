import './index.scss';
import Button, { IButtonProps } from '@nl-rvo/components/button/src/template';
import StatusIcon from '@nl-rvo/components/status-icon/src/template';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import React from 'react';
import { Icon } from '../../icon/src/template';

export interface ILoader extends HTMLAttributes<HTMLDivElement> {
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

export const Loader: React.FC<ILoader> = (props: ILoader) => {
  const { overlay, status, primaryAction, secondaryAction, animateLoader = true } = props;

  return (
    <div className={clsx('rvo-loader', overlay && 'rvo-loader--overlay')}>
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
