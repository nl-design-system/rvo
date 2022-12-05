/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import EmblemSrc from '@nl-rvo/assets/images/emblem.svg';
import LogoSrc from '@nl-rvo/assets/images/logo.svg';
import clsx from 'clsx';
import React from 'react';
import { defaultArgs } from './defaultArgs';
import './index.scss';
export interface ILogoProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const Logo: React.FC<ILogoProps> = ({
  className = defaultArgs.className,
  title = defaultArgs.title,
  subtitle = defaultArgs.subtitle,
}) => {
  return <img src={LogoSrc} alt={`${title || ''} ${subtitle || ''}`} className={clsx('rvo-logo-img', className)} />;
};

export const LogoWithText: React.FC<ILogoProps> = ({
  title = 'Rijksdienst voor Ondernemend Nederland',
  subtitle = '',
}) => {
  return (
    <div className="rvo-logo">
      <div className="rvo-logo__emblem">
        <img src={EmblemSrc} />
      </div>
      <div className="rvo-logo__wordmark">
        <p className="rvo-logo__title">{title}</p>
        {subtitle && <p className="rvo-logo__subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

export default Logo;
