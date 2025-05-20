/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import Button, { IButtonProps } from '@nl-rvo/components/button/src/template';
import TableCell from '@nl-rvo/components/expandable-table/src/table-cell/template';
import Icon from '@nl-rvo/components/icon/src/template';
import clsx from 'clsx';
import React, { HTMLAttributes, ReactElement, useState } from 'react';
import { TableCellType } from '../table-cell/template';

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

  const renderExpandableButton = (cell: TableCellType): TableCellType => {
    const { 'aria-controls': controls, className, ...cellProps } = cell.props;
    const buttonProps: IButtonProps = {
      className: 'utrecht-button--padding-none utrecht-button--fit-content',
      'aria-controls': controls,
      'aria-expanded': visible,
    };

    return (
      <TableCell className={clsx('rvo-table-cell--fit-content', className)} {...cellProps}>
        <Button kind="tertiary" size="xs" onClick={() => setVisible(!visible)} {...buttonProps}>
          <Icon icon={visible ? 'delta-omhoog' : 'delta-omlaag'} size="md" color="hemelblauw" />
        </Button>
      </TableCell>
    );
  };

  const renderExpandableRow = (cell: TableCellType): TableRowType | undefined => {
    const { 'aria-controls': id } = cell.props;

    return cell.props.expandable ? (
      <Row id={id} hidden={!visible} className="rvo-expandable-table-row">
        <TableCell colSpan={Array.isArray(children) ? children.length : undefined}>{cell.props.children}</TableCell>
      </Row>
    ) : undefined;
  };

  const renderCell = (cell: TableCellType): TableCellType =>
    cell.props.expandable ? renderExpandableButton(cell) : cell;

  return (
    <>
      <Row {...otherProps}>{React.Children.map(children, renderCell)}</Row>
      {React.Children.map(children, renderExpandableRow)}
    </>
  );
};

export default TableRow;
