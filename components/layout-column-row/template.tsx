/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import { defaultArgs } from './defaultArgs';
import './index.scss';

export interface ILayoutColumnRowProps {
  size?: '0' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  row?: boolean;
  wrap?: boolean;
  alignItems?: '' | 'start' | 'center' | 'end';
  alignContent?: '' | 'start' | 'center' | 'end' | 'space-between';
  justifyItems?: '' | 'start' | 'center' | 'end';
  justifyContent?: '' | 'start' | 'center' | 'end' | 'space-between';
}

export const argTypes = {
  size: {
    options: ['0', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    control: { type: 'radio' },
  },
  row: {
    control: 'boolean',
  },
  wrap: {
    control: 'boolean',
  },
  alignItems: {
    options: ['', 'start', 'center', 'end'],
    control: { type: 'select' },
  },
  alignContent: {
    options: ['', 'start', 'center', 'end', 'space-between'],
    control: { type: 'select' },
  },
  justifyItems: {
    options: ['', 'start', 'center', 'end'],
    control: { type: 'select' },
  },
  justifyContent: {
    options: ['', 'start', 'center', 'end', 'space-between'],
    control: { type: 'select' },
  },
};

export const LayoutColumnRow: React.FC<PropsWithChildren<ILayoutColumnRowProps>> = ({
  size = defaultArgs.size,
  row = defaultArgs.row,
  wrap = defaultArgs.wrap,
  alignItems = defaultArgs.alignItems,
  alignContent = defaultArgs.alignContent,
  justifyItems = defaultArgs.justifyItems,
  justifyContent = defaultArgs.justifyContent,
  children,
}: PropsWithChildren<ILayoutColumnRowProps>) => {
  return (
    <div
      className={clsx(
        row ? 'rvo-layout-row' : 'rvo-layout-column',
        alignItems.length > 0 && `rvo-layout-align-items-${alignItems}`,
        alignContent.length > 0 && `rvo-layout-align-content-${alignContent}`,
        justifyItems.length > 0 && `rvo-layout-justify-items-${justifyItems}`,
        justifyContent.length > 0 && `rvo-layout-justify-content-${justifyContent}`,
        `rvo-layout-gap--${size}`,
        wrap && 'rvo-layout--wrap',
      )}
      {...(!children && { style: { height: '300px' } })}
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

export default LayoutColumnRow;
