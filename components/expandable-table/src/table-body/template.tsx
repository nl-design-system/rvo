/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import clsx from 'clsx';
import React, { HTMLAttributes, ReactElement } from 'react';
import { TableRowType } from '../table-row/template';

export type TableBodyType = ReactElement<ITableBodyProps>;

export interface ITableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  children?: TableRowType | Array<TableRowType>;
}

export const TableBody: React.FC<ITableBodyProps> = ({ children, className, ...otherProps }: ITableBodyProps) => (
  <tbody className={clsx('rvo-table-body', className)} {...otherProps}>
    {children}
  </tbody>
);

export default TableBody;
