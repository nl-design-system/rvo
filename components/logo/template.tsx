/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import EmblemSrc from '@nl-rvo/assets/images/emblem.svg';
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
  title = defaultArgs.title,
  subtitle = defaultArgs.subtitle,
  className = defaultArgs.className,
}) => {
  return (
    <div className={clsx('rvo-logo', className)}>
      <div className="rvo-logo__emblem">
        <img src={EmblemSrc} alt={`${title || ''}${subtitle.length ? `, ${subtitle}` : ''}`} />
      </div>
      <div className="rvo-logo__wordmark">
        <p className="rvo-logo__title">{title}</p>
        {subtitle && <p className="rvo-logo__subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

export default Logo;
