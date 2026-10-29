import { HTMLAttributes } from 'react';
import { TableHeadType } from './table-head';
import { TableBodyType } from './table-body';
import { TableFooterType } from './table-footer';

type TableChild = TableHeadType | TableBodyType | TableFooterType;

export interface IExpandableTableProps extends HTMLAttributes<HTMLTableElement> {
  caption?: string;
  className?: string;
  children?: TableChild | TableChild[];
}
