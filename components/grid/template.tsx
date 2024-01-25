/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import { defaultArgs } from './defaultArgs';
import './index.scss';

export interface IGridProps {
  gap?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  columns?: 'one' | 'two' | 'three' | 'four' | 'five' | 'six';
}

export const argTypes = {
  gap: {
    options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    control: { type: 'radio' },
  },
  columns: {
    options: ['one', 'two', 'three', 'four', 'five', 'six'],
    control: { type: 'radio' },
  },
};

export const Grid: React.FC<PropsWithChildren<IGridProps>> = ({
  gap = defaultArgs.gap,
  columns = defaultArgs.columns,
  children,
}: PropsWithChildren<IGridProps>) => {
  return (
    <div className="rvo-layout-grid-container">
      <div className={clsx('rvo-layout-grid', `rvo-layout-gap--${gap}`, `rvo-layout-grid-columns--${columns}`)}>
        {children || (
          <>
            <div>Element A</div>
            <div>Element B</div>
            <div>Element C</div>
            <div>Element D</div>
            <div>Element E</div>
            <div>Element F</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Grid;
