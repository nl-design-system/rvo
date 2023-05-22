/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import FavIconSrc from '@nl-rvo/assets/images/favicon/icon.svg';
import clsx from 'clsx';

export const Favicon = (props) => {
  const className = props && props.className ? props.className : '';
  return <img src={FavIconSrc} className={clsx('rvo-favicon', className)} />;
};
