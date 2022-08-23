/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';

interface ILayoutColumnRowProps {
  size?: string;
  row?: boolean;
  wrap?: boolean;
}

export const argTypes = {
  size: {
    options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    control: { type: 'radio' },
  },
  row: {
    control: 'boolean',
  },
  wrap: {
    control: 'boolean',
  },
};

export const defaultArgs: ILayoutColumnRowProps = {
  size: 'md',
  row: false,
  wrap: false,
};

export const LayoutColumnRow: React.FC<ILayoutColumnRowProps> = ({ size, row, wrap, children }) => {
  return (
    <div
      className={clsx(
        row ? 'rvo-layout-row' : 'rvo-layout-column',
        `rvo-layout-gap--${size}`,
        wrap && 'rvo-layout--wrap',
      )}
    >
      {children || (
        <>
          <div>Element A</div>
          <div>Element B</div>
        </>
      )}
    </div>
  );
};
