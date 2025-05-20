/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import clsx from 'clsx';
import React, { HTMLAttributes, ReactElement } from 'react';
import { TableRowType } from '../table-row/template';

export type TableHeadType = ReactElement<ITableHeadProps>;

export interface ITableHeadProps extends HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
  children?: TableRowType | Array<TableRowType>;
}

export const TableHead: React.FC<ITableHeadProps> = ({ children, className, ...otherProps }: ITableHeadProps) => (
  <thead className={clsx('rvo-table-head', className)} {...otherProps}>
    {children}
  </thead>
);

export default TableHead;
