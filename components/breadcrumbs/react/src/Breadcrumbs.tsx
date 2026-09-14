/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import '@nl-rvo/css-layout-flow';
import '@nl-rvo/css-breadcrumbs';
import { Icon } from '@nl-rvo/react-icon';
import { Link } from '@nl-rvo/react-link';
import { IBreadcrumbProps } from './Breadcrumbs.types';

const parseDividerMarkup = (index: number, maxLength: number) => {
  return index > 0 && index < maxLength && <Icon color="hemelblauw" icon={'delta-naar-rechts' as any} size="xs" />;
};

export const Breadcrumbs: React.FC<IBreadcrumbProps & React.HTMLAttributes<HTMLOListElement>> = ({
  items,
  size = 'sm',
  children,
  ...rootElementProps
}) => {
  const renderBreadcrumbItem = (link, label) => {
    if (link?.length && link.length > 0) {
      return (
        <Link href={link} noUnderline={true}>
          {label}
        </Link>
      );
    } else {
      return <span className={clsx('rvo-breadcrumb-current-page')}>{label}</span>;
    }
  };

  return (
    <ol className={clsx('rvo-breadcrumbs', size && `rvo-breadcrumbs--${size}`)} {...rootElementProps}>
      {items?.map((item, index) => {
        return (
          <li key={`${item.label}${index}`} className="rvo-breadcrumbs-item">
            {items && parseDividerMarkup(index, items.length)}
            {renderBreadcrumbItem(item.link, item.label)}
          </li>
        );
      })}
    </ol>
  );
};

export default Breadcrumbs;
