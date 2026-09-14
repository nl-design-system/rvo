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
  let dtMarkup: string | React.ReactNode = label && parseContentMarkup(label);
  let ddMarkup: string | React.ReactNode = value && parseContentMarkup(value);

  return (
    <React.Fragment>
      <dt>{dtMarkup}</dt>
      <dd>{ddMarkup}</dd>
    </React.Fragment>
  );
};

DataList.Item = DataListItem;

export default DataList;
