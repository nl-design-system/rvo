/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import '@nl-rvo/css-data-list';
import { IDataListItemProps, IDataListProps } from './DataList.types';
import parseContentMarkup from '../../../../packages/component-library-react/src/utils/parseContentMarkup';

export const DataList: React.FC<IDataListProps> & {
  Item: React.FC<IDataListItemProps>;
} = ({ children, ...props }) => (
  <dl className={clsx('rvo-data-list')} {...props}>
    {children}
  </dl>
);

export const DataListItem: React.FC<IDataListItemProps> = ({ label, value }: IDataListItemProps) => {
  return (
    <React.Fragment>
      <dt>{parseContentMarkup(label)}</dt>
      <dd>{parseContentMarkup(value)}</dd>
    </React.Fragment>
  );
};

DataList.Item = DataListItem;

export default DataList;
