/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import '@nl-rvo/css-expandable-table';
import { IExpandableTableProps } from './ExpandableTable.types';

export const ExpandableTable: React.FC<IExpandableTableProps> = ({
  caption,
  children,
  className,
  ...otherProps
}: IExpandableTableProps) => {
  return (
    <div role="region" className={clsx('rvo-table--responsive', className)} {...otherProps}>
      <table className="rvo-expandable-table">
        {caption && <caption className="rvo-caption">{caption}</caption>}
        {children}
      </table>
    </div>
  );
};

export default ExpandableTable;
