/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import BreadcrumbsItem from '../breadcrumbs-item/template';
import { Icon } from '../icon/template';
import '../layout-column-row/index.scss';
import './index.scss';

export interface IBreadcrumbsItem {
  label: string;
  url?: string;
}

export interface IBreadcrumbProps {
  /** @uxpinignoreprop */
  items: IBreadcrumbsItem[];
  size: 'sm' | 'md' | 'lg';
  /** @uxpinpropname Breadcrumb items */
  children?: ReactNode | undefined;
}

export const argTypes = {
  items: {
    control: 'object',
  },
  size: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  children: {
    table: {
      disable: true,
    },
  },
};

const parseDividerMarkup = (index: number, items: unknown[]) => {
  return index > 0 && index < items.length && <Icon color="hemelblauw" icon={'delta-naar-rechts' as any} size="xs" />;
};

export const Breadcrumbs: React.FC<IBreadcrumbProps> = ({
  items = defaultArgs.items,
  size = defaultArgs.size,
  children,
}: IBreadcrumbProps) => {
  return (
    <ol className={clsx('rvo-breadcrumbs', `rvo-breadcrumbs--${size}`)}>
      {(children &&
        React.Children.map(children, (child, index) => {
          return (
            <li key={index} className="rvo-breadcrumbs-item">
              {parseDividerMarkup(index, items)}
              <BreadcrumbsItem key={index} {...(child as any).props} />
            </li>
          );
        })) ||
        items.map((item, index) => {
          return (
            <li key={`${item.label}${index}`} className="rvo-breadcrumbs-item">
              {parseDividerMarkup(index, items)}
              <BreadcrumbsItem {...item} />
            </li>
          );
        })}
    </ol>
  );
};

export default Breadcrumbs;
