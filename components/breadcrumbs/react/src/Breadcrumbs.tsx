/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import '@nl-rvo/css-layout-flow/layout-flow.css';
import '@nl-rvo/css-breadcrumbs/breadcrumbs.css';
import { Icon } from '@nl-rvo/react-icon';
import { Link } from '@nl-rvo/react-link';
import { IBreadcrumbProps, IBreadcrumbsItem } from './Breadcrumbs.types';

const parseDividerMarkup = (index: number, maxLength: number) => {
  return index > 0 && index < maxLength && <Icon color="hemelblauw" icon={'delta-naar-rechts' as any} size="xs" />;
};

export const Breadcrumbs: React.FC<IBreadcrumbProps> = ({ items, size = 'sm', ...rest }) => {
  const renderBreadcrumbItem = (
    link: IBreadcrumbsItem['link'],
    label: IBreadcrumbsItem['label'],
    onClick: IBreadcrumbsItem['onClick'],
  ) => {
    if (link?.length && link.length > 0) {
      return (
        <Link href={link} noUnderline={true} onClick={onClick}>
          {label}
        </Link>
      );
    } else {
      return <span className={clsx('rvo-breadcrumb-current-page')}>{label}</span>;
    }
  };

  return (
    <ol className={clsx('rvo-breadcrumbs', size && `rvo-breadcrumbs--${size}`)} {...rest}>
      {items?.map((item, index) => {
        return (
          <li key={`${item.label}${index}`} className="rvo-breadcrumbs-item">
            {items && parseDividerMarkup(index, items.length)}
            {renderBreadcrumbItem(item.link, item.label, item.onClick)}
          </li>
        );
      })}
    </ol>
  );
};

export default Breadcrumbs;
