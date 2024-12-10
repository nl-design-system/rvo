/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import { defaultArgs } from './defaultArgs';
import Link, { ILinkProps } from '../../../link/src/template';
import { IBreadcrumbsItem } from '../template';

export interface IBreadcrumbsItemProps extends IBreadcrumbsItem, HTMLAttributes<HTMLSpanElement | HTMLAllCollection> {
  onClick?: ILinkProps['onClick'];
}

export const BreadcrumbsItem: React.FC<IBreadcrumbsItemProps> = ({
  label = defaultArgs.label,
  link = defaultArgs.link,
  onClick,
  ...props
}: IBreadcrumbsItemProps) => {
  if (link?.length && link.length > 0) {
    return (
      <Link href={link} noUnderline={true} onClick={onClick} {...props}>
        {label}
      </Link>
    );
  } else {
    return (
      <span className={clsx('rvo-breadcrumb-current-page')} {...props}>
        {label}
      </span>
    );
  }
};

export default BreadcrumbsItem;
