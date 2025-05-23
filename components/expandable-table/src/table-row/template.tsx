/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import Button, { IButtonProps } from '@nl-rvo/components/button/src/template';
import Icon from '@nl-rvo/components/icon/src/template';
import clsx from 'clsx';
import React, { HTMLAttributes, ReactElement, useState } from 'react';
import TableCell, { ITableCellProps, TableCellType } from '../table-cell/template';

export type TableRowType = ReactElement<ITableRowProps>;

export interface ITableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children?: TableCellType | TableCellType[];
  expanded?: boolean;
}

const Row: React.FC<ITableRowProps> = ({ children, className, ...otherProps }: ITableRowProps) => {
  return (
    <tr className={clsx('rvo-table-row', className)} {...otherProps}>
      {children}
    </tr>
  );
};

export const TableRow: React.FC<ITableRowProps> = ({ children, expanded = false, ...otherProps }: ITableRowProps) => {
  const [visible, setVisible] = useState(expanded);

  const isExpandable: boolean = !!React.Children.map(children, (child) => child).find((cell) => cell.props.expandable);

  const computeRowSpan = (cell: TableCellType, index: number): number | undefined =>
    visible && index === 0 && cell.props.expandable ? 2 : undefined;

  const computeCellSpan = (index: number): number | undefined => {
    const count: number | undefined = Array.isArray(children) ? children.length : undefined;
    return count && index === 0 ? count - 1 : count;
  };

  const renderExpandableButton = (cell: TableCellType, index: number): TableCellType => {
    const { 'aria-controls': controls, className, ...otherProps } = cell.props;

    const cellProps: ITableCellProps = {
      className: clsx('rvo-table-cell--expandable-button', className),
      rowSpan: computeRowSpan(cell, index),
      ...otherProps,
    };

    const buttonProps: IButtonProps = {
      className: 'utrecht-button--padding-none utrecht-button--fit-content',
      'aria-controls': controls,
      'aria-expanded': visible,
    };

    return (
      <TableCell {...cellProps}>
        <Button kind="tertiary" size="xs" onClick={() => setVisible(!visible)} {...buttonProps}>
          <Icon icon={visible ? 'delta-omhoog' : 'delta-omlaag'} size="md" color="hemelblauw" />
        </Button>
      </TableCell>
    );
  };

  const renderExpandableRow = (cell: TableCellType, index: number): TableRowType | undefined => {
    const { 'aria-controls': id } = cell.props;

    return cell.props.expandable ? (
      <Row id={id} hidden={!visible}>
        <TableCell colSpan={computeCellSpan(index)}>{cell.props.children}</TableCell>
      </Row>
    ) : undefined;
  };

  const renderCell = (cell: TableCellType, index: number): TableCellType =>
    cell.props.expandable ? renderExpandableButton(cell, index) : cell;

  return (
    <>
      <Row
        className={clsx(isExpandable && 'rvo-expandable-table-row', visible && 'rvo-expandable-table-row--open')}
        {...otherProps}
      >
        {React.Children.map(children, renderCell)}
      </Row>
      {React.Children.map(children, renderExpandableRow)}
    </>
  );
};

export default TableRow;
