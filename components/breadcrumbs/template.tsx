/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import BreadcrumbsItem from './breadcrumbs-item/template';
import { defaultArgs } from './defaultArgs';
import { Icon } from '../icon/template';
import '../layout-flow/index.scss';
import './index.scss';

export interface IBreadcrumbsItem {
  label: string;
  link?: string;
}

export interface IBreadcrumbProps {
  /** @uxpinignoreprop */
  items?: IBreadcrumbsItem[];
  size?: 'sm' | 'md' | 'lg';
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

const parseDividerMarkup = (index: number, maxLength: number) => {
  return index > 0 && index < maxLength && <Icon color="hemelblauw" icon={'delta-naar-rechts' as any} size="xs" />;
};

export const Breadcrumbs: React.FC<IBreadcrumbProps> = ({
  items = defaultArgs.items,
  size = defaultArgs.size,
  children,
}: IBreadcrumbProps) => {
  return (
    <ol className={clsx('rvo-breadcrumbs', size && `rvo-breadcrumbs--${size}`)}>
      {(children &&
        React.Children.map(children, (child, index) => {
          return (
            <li key={index} className="rvo-breadcrumbs-item">
              {Array.isArray(children) && parseDividerMarkup(index, children.length)}
              <BreadcrumbsItem key={index} {...(child as any).props} />
            </li>
          );
        })) ||
        items?.map((item, index) => {
          return (
            <li key={`${item.label}${index}`} className="rvo-breadcrumbs-item">
              {items && parseDividerMarkup(index, items.length)}
              <BreadcrumbsItem {...item} />
            </li>
          );
        })}
    </ol>
  );
};

export default Breadcrumbs;
