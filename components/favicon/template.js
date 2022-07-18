/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import '@nl-rvo/assets/images/favicon/icon.svg';

export const Favicon = (props) => {
  const className = props && props.className ? props.className : '';
  return `<img src="rvo/images/favicon/icon.svg" class="${clsx('rvo-favicon', className)}" />`;
};
