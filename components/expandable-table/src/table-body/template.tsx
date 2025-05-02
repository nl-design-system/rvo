/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import clsx from 'clsx';
import React, { HTMLAttributes, ReactElement } from 'react';
import { ExpandableTableRowType } from '../expandable-table-row/template';
import { TableRowType } from '../table-row/template';

export type TableBodyType = ReactElement<ITableBodyProps>;
export interface ITableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
  children: TableRowType | TableRowType[] | ExpandableTableRowType | ExpandableTableRowType[];
}

export const TableBody: React.FC<ITableBodyProps> = ({ children, className, ...otherProps }: ITableBodyProps) => {
  return (
    <tbody className={clsx('rvo-table-body', className)} {...otherProps}>
      {children}
    </tbody>
  );
};

export default TableBody;
