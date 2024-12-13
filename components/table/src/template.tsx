/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import { defaultArgs } from './defaultArgs';
import { SortAscendingIcon, SortDescendingIcon } from './icons';
import { Button } from '../../button/src/template';
import validateHTML from '../../utils/validateHTML';
import './index.scss';

export interface ITableColumnProps {
  label: string;
  type?: 'numeric';
  sortable?: boolean;
  sortDirection?: 'ASC' | 'DESC' | '';
}

export interface ITableProps {
  description?: string;
  columns: ITableColumnProps[];
  rows: string[][];
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

export const Table: React.FC<ITableProps> = ({
  description,
  columns = defaultArgs.columns,
  rows = defaultArgs.rows,
}: ITableProps) => {
  return (
    <div className="rvo-table--responsive">
      <table className="rvo-table">
        {description && <caption className="rvo-caption">{description}</caption>}
        <thead className="rvo-table-head">
          <tr className="rvo-table-row">
            {columns.map((column, index) => {
              const getSortIcon = () => {
                if (column.sortDirection === 'ASC') {
                  return <SortAscendingIcon className="rvo--table-header__sorting-icon" />;
                }
                if (column.sortDirection === 'DESC') {
                  return <SortDescendingIcon className="rvo--table-header__sorting-icon" />;
                }
                return undefined;
              };

              return (
                <th
                  key={index}
                  scope="col"
                  className={clsx(
                    'rvo-table-header',
                    column.sortable && 'rvo-table-header--sortable',
                    column.type === 'numeric' && 'rvo-table-header--numeric',
                  )}
                >
                  {column.sortable ? (
                    <div className="rvo-table-header__sortable-container">
                      {column.label}
                      <Button kind="tertiary" size="sm" className="rvo-table-header__sortable-button">
                        {getSortIcon()}
                      </Button>
                    </div>
                  ) : (
                    column.label
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="rvo-table-body">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="rvo-table-row">
              {columns.map((column, columnIndex) => {
                const cellValue = row[columnIndex];
                const cellClassNames = clsx('rvo-table-cell', column.type === 'numeric' && 'rvo-table-cell--numeric');

                // Parse cell markup (value is either string, HTML string or React node)
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
