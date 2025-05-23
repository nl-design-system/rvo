/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import { TableBodyType } from './table-body/template';
import { TableFooterType } from './table-footer/template';
import { TableHeadType } from './table-head/template';
import './index.scss';

type TableChild = TableHeadType | TableBodyType | TableFooterType;

export interface ITableProps extends HTMLAttributes<HTMLTableElement> {
  /** Omschrijving van de tabel **/
  caption?: string;
  /** Aanvullende classes **/
  className?: string;
  /** Children mogen alleen TableHead en TableBody zijn **/
  children?: TableChild | TableChild[];
}

export const Table: React.FC<ITableProps> = ({ caption, children, className, ...otherProps }: ITableProps) => {
  return (
    <div role="region" className={clsx('rvo-table--responsive', className)} {...otherProps}>
      <table className="rvo-expandable-table">
        {caption && <caption className="rvo-caption">{caption}</caption>}
        {children}
      </table>
    </div>
  );
};

export default Table;
