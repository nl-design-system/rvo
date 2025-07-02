/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import './index.scss';

export interface IGridProps {
  gap?: '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  columns?:
    | 'one'
    | 'two'
    | 'three'
    | 'four'
    | 'five'
    | 'six'
    | 'seven'
    | 'eight'
    | 'nine'
    | 'ten'
    | 'eleven'
    | 'twelve';
  division?: string;
  /** @uxpinpropname Content */
  children?: ReactNode | undefined;
  className?: string;
}

export const argTypes = {
  gap: {
    options: ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    control: { type: 'radio' },
  },
  columns: {
    options: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'],
    control: { type: 'radio' },
  },
  division: {
    control: 'text',
    placeholder: '2fr 1fr',
  },
  children: {
    table: {
      disable: true,
    },
  },
};

export const Grid: React.FC<IGridProps> = ({
  gap = defaultArgs.gap,
  columns = defaultArgs.columns,
  division,
  children,
  className,
}: IGridProps) => {
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
    <div className={clsx('rvo-layout-grid-container', className)}>
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
