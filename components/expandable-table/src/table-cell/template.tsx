/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import clsx from 'clsx';
import React, { DetailedHTMLProps, ReactElement, ReactNode, TdHTMLAttributes, ThHTMLAttributes } from 'react';

export type TableCellType = ReactElement<ITableCellProps>;

type TableCellNativeProps = DetailedHTMLProps<ThHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> &
  DetailedHTMLProps<TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>;

export interface ITableCellProps extends TableCellNativeProps {
  isHeader?: boolean;
  className?: string;
  children?: ReactNode;
}

export const TableCell: React.FC<ITableCellProps> = ({
  isHeader = false,
  children,
  className,
  ...otherProps
}: ITableCellProps) => {
  const classes = clsx(className, isHeader ? 'rvo-table-header' : 'rvo-table-cell');

  if (isHeader) {
    return (
      <th scope="col" className={classes} {...otherProps}>
        {children}
      </th>
    );
  }
  return (
    <td className={classes} {...otherProps}>
      {children}
    </td>
  );
};

export default TableCell;
