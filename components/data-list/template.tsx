/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { HTMLAttributes, ReactNode } from 'react';
import DataListItem, { IDataListItemProps } from './data-list-item/template';
import { defaultArgs } from './defaultArgs';
import './index.scss';

export interface IDataListProps extends HTMLAttributes<HTMLDListElement> {
  /** @uxpinignoreprop */
  items?: IDataListItemProps[];
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
    {children || items?.map((itemContent, index) => <DataListItem key={index} {...itemContent} />)}
  </dl>
);

export default DataList;
