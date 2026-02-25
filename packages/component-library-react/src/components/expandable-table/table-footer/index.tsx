/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import React, { HTMLAttributes, ReactElement } from 'react';
import { TableRowType } from '../table-row';

export type TableFooterType = ReactElement<ITableFooterProps>;

export interface ITableFooterProps extends HTMLAttributes<HTMLTableSectionElement> {
  children?: TableRowType | TableRowType[];
}

export const TableFooter: React.FC<ITableFooterProps> = ({ children, className, ...otherProps }: ITableFooterProps) => {
  return (
    <tfoot className={className} {...otherProps}>
      {children}
    </tfoot>
  );
};

export default TableFooter;
