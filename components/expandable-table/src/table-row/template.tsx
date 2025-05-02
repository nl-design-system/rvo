/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import clsx from 'clsx';
import React, { HTMLAttributes, ReactElement } from 'react';
import { TableCellType } from '../table-cell/template';

export type TableRowType = ReactElement<ITableRowProps>;
export interface ITableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  isExpandable?: boolean;
  isHeader?: boolean;
  className?: string;
  children: TableCellType | TableCellType[];
}

export const TableRow: React.FC<ITableRowProps> = ({
  isExpandable = false,
  isHeader = false,
  children,
  className,
  ...otherProps
}: ITableRowProps) => {
  return (
    <tr className={clsx('rvo-table-row', 'rvo-expandable-table-row', className)} {...otherProps}>
      {!isExpandable &&
        (isHeader ? <th scope="col" className="rvo-table-header"></th> : <td className="rvo-table-cell"></td>)}
      {children}
    </tr>
  );
};

export default TableRow;
