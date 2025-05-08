/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import Icon from '@nl-rvo/components/icon/src/template';
import clsx from 'clsx';
import React, { HTMLAttributes, ReactElement, useState } from 'react';
import { TableCell, TableCellType } from '../table-cell/template';
import { TableRow } from '../table-row/template';
import { DetailsType } from './details/template';

export type ExpandableTableRowType = ReactElement<IExpandableTableRowProps>;

export interface IExpandableTableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  className?: string;
  children?: TableCellType | TableCellType[] | DetailsType;
}

export const ExpandableTableRow: React.FC<IExpandableTableRowProps> = ({
  children,
  className,
}: IExpandableTableRowProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleExpand = () => setIsOpen(!isOpen);

  const tableCells: TableCellType[] = React.Children.toArray(children).filter(
    (child): child is TableCellType =>
      React.isValidElement(child) && child.type && (child.type as any).displayName === 'TableCell',
  );

  const details: DetailsType = React.Children.toArray(children).find(
    (child): child is DetailsType =>
      React.isValidElement(child) && child.type && (child.type as any).displayName === 'Details',
  );

  const toggleCell: TableCellType = (
    <TableCell>
      <div className="rvo-table-row-icon" onClick={toggleExpand} style={{ cursor: 'pointer' }}>
        <Icon
          icon={`delta-${isOpen ? 'omhoog' : 'omlaag'}`}
          size="md"
          color="hemelblauw"
          className={`rvo-expandable-table-row-icon--${isOpen ? 'open' : 'closed'}`}
          aria-expanded={isOpen}
        />
      </div>
    </TableCell>
  );

  const cellsWithToggle: TableCellType[] = [toggleCell, ...tableCells];

  const columnCount = tableCells.length;

  return (
    <>
      <TableRow
        className={clsx('rvo-expandable-table-row', isOpen ? 'rvo-expandable-table-row--open' : '', className)}
        isExpandable={true}
      >
        {cellsWithToggle}
      </TableRow>
      {details && (
        <TableRow
          className={clsx('rvo-expandable-table-row--details', className)}
          hidden={!isOpen}
          aria-hidden={!isOpen}
        >
          <TableCell colSpan={columnCount}>{details}</TableCell>
        </TableRow>
      )}
    </>
  );
};

export default ExpandableTableRow;
