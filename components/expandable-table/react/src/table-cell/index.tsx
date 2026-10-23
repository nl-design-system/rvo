/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactElement, ReactNode, TdHTMLAttributes, ThHTMLAttributes } from 'react';

export type TableCellType = ReactElement<ITableCellProps>;

type HTMLTableCellProps = TdHTMLAttributes<HTMLTableCellElement> & ThHTMLAttributes<HTMLTableCellElement>;

export interface ITableCellProps extends HTMLTableCellProps {
  header?: boolean;
  expandable?: boolean;
  children?: ReactNode;
}

export const TableCell: React.FC<ITableCellProps> = ({
  header = false,
  children,
  className,
  ...otherProps
}: ITableCellProps) => {
  return header ? (
    <th scope="col" className={clsx('rvo-table-header', className)} {...otherProps}>
      {children}
    </th>
  ) : (
    <td className={clsx('rvo-table-cell', className)} {...otherProps}>
      {children}
    </td>
  );
};

export default TableCell;
