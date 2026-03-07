/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';

type FaviconProps = ComponentPropsWithoutRef<'img'>;

export const Favicon = ({ className, ...props }: FaviconProps) => {
  return <img src="images/favicon/icon.svg" className={clsx('rvo-favicon', className)} {...props} />;
};

export default Favicon;
