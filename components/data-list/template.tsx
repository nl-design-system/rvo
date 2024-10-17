/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { HTMLAttributes, ReactNode } from 'react';
import DataListItem from './data-list-item/template';
import { defaultArgs } from './defaultArgs';
import './index.scss';

interface IDataListItem {
  label: string;
  value: string;
}

export interface IDataListProps extends HTMLAttributes<HTMLDListElement> {
  /** @uxpinignoreprop */
  items?: IDataListItem[];
  /** @uxpinpropname Data list items */
  children?: ReactNode | undefined;
}

export const argTypes = {
  items: {
    type: {
      name: 'array',
      required: true,
    },
  },
};

export const DataList: React.FC<IDataListProps> = ({
  items = defaultArgs.items,
  children,
  ...props
}: IDataListProps) => (
  <dl className={clsx('rvo-data-list')} {...props}>
    {children ||
      items?.map((itemContent, index) => (
        <DataListItem key={index} label={itemContent.label} value={itemContent.value} />
      ))}
  </dl>
);

export default DataList;
