/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import '@nl-rvo/css-grid';
import { IGridProps } from './Grid.types';

export const Grid: React.FC<IGridProps & React.HTMLAttributes<HTMLDivElement>> = ({
  gap = 'md',
  columns,
  division,
  marginEnd,
  children,
  className,
  ...rootElementProps
}) => {
  const getColumnCount = (columnName: string | undefined): number => {
    if (!columnName) {
      return 1;
    }
    const columnMap: { [key: string]: number } = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
      ten: 10,
      eleven: 11,
      twelve: 12,
    };
    return columnMap[columnName];
  };

  return (
    <div
      className={clsx('rvo-layout-grid-container', marginEnd && `rvo-margin-block-end--${marginEnd}`, className)}
      {...rootElementProps}
    >
      <div
        className={clsx(
          'rvo-layout-grid',
          `rvo-layout-gap--${gap}`,
          `rvo-layout-grid-columns--${columns}`,
          division && 'rvo-layout-grid--division',
        )}
        style={
          division
            ? ({
                '--division': division,
              } as React.CSSProperties)
            : undefined
        }
      >
        {children ||
          Array.from({ length: getColumnCount(columns) }, (_, index) => (
            <div key={index}>Element {String.fromCharCode(65 + index)}</div>
          ))}
      </div>
    </div>
  );
};

export default Grid;
