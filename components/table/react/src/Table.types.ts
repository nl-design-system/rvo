import { HTMLAttributes } from 'react';

export interface ITableColumnProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  type?: 'numeric';
  sortable?: boolean;
  sortDirection?: 'ASC' | 'DESC';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  key?: string;
}

export interface ITableProps {
  description?: string;
  columns: ITableColumnProps[];
  rows: string[][];
  onSort?: (columnIndex: number, direction: 'ASC' | 'DESC' | '') => void;
}
