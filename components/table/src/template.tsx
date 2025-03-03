/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { HTMLAttributes, useCallback, useEffect, useState } from 'react';
import { defaultArgs } from './defaultArgs';
import { SortAscendingIcon, SortDescendingIcon } from './icons';
import validateHTML from '../../utils/validateHTML';
import './index.scss';

export interface ITableColumnProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  type?: 'numeric';
  sortable?: boolean;
  sortDirection?: 'ASC' | 'DESC' | '';
  key?: string;
}

export interface ITableProps {
  description?: string;
  columns: ITableColumnProps[];
  rows: string[][];
  onSort?: (columnIndex: number, direction: 'ASC' | 'DESC' | '') => void;
}

export const argTypes = {
  description: {
    control: 'text',
  },
  columns: {
    type: {
      name: 'array',
      required: true,
    },
  },
  rows: {
    type: {
      name: 'array',
      required: true,
    },
  },
};

const sortData = (rows: string[][], columnIndex: number, direction: 'ASC' | 'DESC' | '', type?: string): string[][] => {
  if (!direction) return rows;

  return [...rows].sort((a, b) => {
    const aValue = a[columnIndex];
    const bValue = b[columnIndex];

    if (type === 'numeric') {
      const aNum = parseFloat(aValue);
      const bNum = parseFloat(bValue);
      return direction === 'ASC' ? aNum - bNum : bNum - aNum;
    }

    return direction === 'ASC' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
  });
};

export const Table: React.FC<ITableProps> = ({
  description,
  columns = defaultArgs.columns,
  rows = defaultArgs.rows,
  onSort,
  ...props
}: ITableProps) => {
  const [internalColumns, setInternalColumns] = useState(columns);
  const [internalRows, setInternalRows] = useState(rows);

  useEffect(() => {
    setInternalColumns(columns);
    setInternalRows(rows);
  }, [columns, rows]);

  const handleSort = useCallback(
    (columnIndex: number) => {
      const newColumns = [...internalColumns];
      const currentDirection = newColumns[columnIndex].sortDirection || '';
      const newDirection: 'ASC' | 'DESC' | '' =
        currentDirection === '' ? 'ASC' : currentDirection === 'ASC' ? 'DESC' : '';

      // Reset all other columns
      newColumns.forEach((col, i) => {
        if (i !== columnIndex) {
          col.sortDirection = '';
        }
      });

      newColumns[columnIndex].sortDirection = newDirection;
      setInternalColumns(newColumns);
      setInternalRows(sortData(rows, columnIndex, newDirection, columns[columnIndex].type));
      onSort?.(columnIndex, newDirection);
    },
    [internalColumns, rows, columns, onSort],
  );

  return (
    <div className="rvo-table--responsive" {...props}>
      <table className="rvo-table">
        {description && <caption className="rvo-caption">{description}</caption>}
        <thead className="rvo-table-head">
          <tr className="rvo-table-row">
            {internalColumns.map((column, index) => {
              return (
                <th
                  key={index}
                  scope="col"
                  className={clsx(
                    'rvo-table-header',
                    column.sortable && 'rvo-table-header--sortable',
                    column.type === 'numeric' && 'rvo-table-header--numeric',
                    (column.sortDirection === 'ASC' || column.sortDirection === 'DESC') &&
                      'rvo-table-header--active-sort',
                  )}
                  onClick={column.sortable ? () => handleSort(index) : undefined}
                  style={column.sortable ? { cursor: 'pointer' } : undefined}
                >
                  <div
                    className={clsx(
                      'rvo-table-header__sortable-container',
                      column.type === 'numeric' && 'rvo-table-header__sortable-container--numeric',
                    )}
                  >
                    {column.label}
                    {column.sortable && column.sortDirection === 'ASC' && (
                      <SortAscendingIcon className="rvo--table-header__sorting-icon" />
                    )}
                    {column.sortable && column.sortDirection === 'DESC' && (
                      <SortDescendingIcon className="rvo--table-header__sorting-icon" />
                    )}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="rvo-table-body">
          {internalRows.map((row, rowIndex) => (
            <tr key={rowIndex} className="rvo-table-row">
              {internalColumns.map((column, columnIndex) => {
                const cellValue = row[columnIndex];
                const cellClassNames = clsx('rvo-table-cell', column.type === 'numeric' && 'rvo-table-cell--numeric');

                let cellMarkup = (
                  <td key={columnIndex} className={cellClassNames}>
                    {cellValue}
                  </td>
                );

                if (typeof cellValue === 'string' && cellValue.length && validateHTML(cellValue)) {
                  cellMarkup = (
                    <td key={columnIndex} className={cellClassNames} dangerouslySetInnerHTML={{ __html: cellValue }} />
                  );
                }

                return cellMarkup;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
