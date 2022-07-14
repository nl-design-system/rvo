/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import '@nl-rvo/assets/images/logo.svg';
import React from 'react';

interface ILogoProps {
  className?: string;
}

export const Logo: React.FC<ILogoProps> = (props) => {
  return <img src="rvo/images/logo.svg" className={clsx('rvo-logo', props.className)} />;
};
