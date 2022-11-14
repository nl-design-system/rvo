/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import { defaultArgs } from './defaultArgs';
import './index.scss';
interface IDataListItem {
  key: string;
  value: string;
}

export interface IDataListProps {
  items: IDataListItem[];
}

export const argTypes = {
  items: {
    type: {
      name: 'array',
      required: true,
    },
  },
};

export const DataList: React.FC<IDataListProps> = ({ items = defaultArgs.items }: IDataListProps) => (
  <dl className={clsx('rvo-data-list')}>
    {items.map(({ key, value }, index) => (
      <React.Fragment key={index}>
        <dt>{key}</dt>
        <dd>{value}</dd>
      </React.Fragment>
    ))}
  </dl>
);

export default DataList;
