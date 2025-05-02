/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import { TableBodyType } from './table-body/template';
import { TableHeadType } from './table-head/template';
import './index.scss';

export interface IExpandableTableProps extends HTMLAttributes<HTMLTableElement> {
  /** Omschrijving van de tabel **/
  tableDescription?: string;
  /** Aanvullende classes **/
  className?: string;
  /** Children mogen alleen TableHead en **/
  children?: TableHeadType | TableBodyType | (TableHeadType | TableBodyType)[];
}

export const ExpandableTable: React.FC<IExpandableTableProps> = ({
  tableDescription,
  children,
  className,
  ...otherProps
}: IExpandableTableProps) => {
  return (
    <div role="region" className={clsx('rvo-table--responsive', className)} {...otherProps}>
      <table className="rvo-table rvo-expandable-table">
        <caption className="rvo-caption">{tableDescription}</caption>
        {children}
      </table>
    </div>
  );
};

export default ExpandableTable;
