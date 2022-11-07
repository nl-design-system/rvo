/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import './index.scss';
interface ILayoutColumnRowProps {
  size?: string;
  row?: boolean;
  wrap?: boolean;
  alignToTop?: boolean;
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

export const LayoutColumnRow: React.FC<PropsWithChildren<ILayoutColumnRowProps>> = ({
  size,
  row,
  wrap,
  alignToTop,
  children,
}) => {
  return (
    <div
      className={clsx(
        row ? 'rvo-layout-row' : 'rvo-layout-column',
        row && alignToTop && 'rvo-layout-row--flex-start',
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
