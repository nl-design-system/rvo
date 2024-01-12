/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import { defaultArgs } from './defaultArgs';
import { Icon } from '../icon/template';
import Link from '../link/template';
import '../layout-column-row/index.scss';
import './index.scss';

interface IBreadcrumbItem {
  label: string;
  url?: string;
}

export interface IBreadcrumbProps {
  items: IBreadcrumbItem[];
  size: 'sm' | 'md' | 'lg';
}

export const argTypes = {
  items: {
    control: 'object',
  },
  size: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
};

export const Breadcrumbs: React.FC<IBreadcrumbProps> = ({
  items = defaultArgs.items,
  size = defaultArgs.size,
}: IBreadcrumbProps) => {
  return (
    <ol className={clsx('rvo-breadcrumbs', `rvo-breadcrumbs--${size}`)}>
      {items.map((item, index) => {
        // Parse divider markup
        let dividerMarkup = index > 0 && index < items.length && (
          <Icon color="hemelblauw" icon={'delta-naar-rechts' as any} size="xs" />
        );

        // Parse item markup
        let itemMarkup;
        if (index < items.length - 1) {
          // Not the last item
          itemMarkup = (
            <Link href={item.url} noUnderline={true}>
              {dividerMarkup}
              {item.label}
            </Link>
          );
        } else {
          // Last item
          itemMarkup = (
            <span className={clsx('rvo-breadcrumb-current-page')}>
              {dividerMarkup}
              {item.label}
            </span>
          );
        }

        return (
          <li key={`${item.label}${index}`} className="rvo-breadcrumbs-item">
            {itemMarkup}
          </li>
        );
      })}
    </ol>
  );
};

export default Breadcrumbs;
