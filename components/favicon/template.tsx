/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';

export const Favicon = (props) => {
  const className = props && props.className ? props.className : '';
  return <img src="images/favicon/icon.svg" className={clsx('rvo-favicon', className)} />;
};

export default Favicon;
