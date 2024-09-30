/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { SyntheticEvent } from 'react';
import { defaultArgs } from './defaultArgs';
import Link from '../../link/template';
import { IBreadcrumbsItem } from '../template';

export interface IBreadcrumbsItemProps extends IBreadcrumbsItem {
  onClick?: (event: SyntheticEvent<HTMLLinkElement>) => void;
}

export const BreadcrumbsItem: React.FC<IBreadcrumbsItemProps> = ({
  label = defaultArgs.label,
  url = defaultArgs.url,
  onClick,
}: IBreadcrumbsItemProps) => {
  if (url?.length > 0) {
    return (
      <Link href={url} noUnderline={true} onClick={onClick}>
        {label}
      </Link>
    );
  } else {
    return <span className={clsx('rvo-breadcrumb-current-page')}>{label}</span>;
  }
};

export default BreadcrumbsItem;
