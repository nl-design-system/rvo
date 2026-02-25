/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import DataListItem, { IDataListItemProps } from './data-list-item';
import { defaultArgs } from './defaultArgs';
import '@nl-rvo/css-data-list/dist/index.css';

export interface IDataListProps {
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

export const DataList: React.FC<IDataListProps & React.HTMLAttributes<HTMLDListElement>> = ({
  items = defaultArgs.items,
  children,
  ...props
}) => (
  <dl className={clsx('rvo-data-list')} {...props}>
    {children || items?.map((itemContent, index) => <DataListItem key={index} {...itemContent} />)}
  </dl>
);

export default DataList;
