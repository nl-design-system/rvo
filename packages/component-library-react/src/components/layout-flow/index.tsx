/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import parseContentMarkup from '../../utils/parseContentMarkup';
import '@nl-rvo/css-layout-flow/dist/index.css';

export interface ILayoutFlowProps {
  gap?: '0' | '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  row?: boolean;
  wrap?: boolean;
  alignItems?: '' | 'start' | 'center' | 'end';
  alignContent?: '' | 'start' | 'center' | 'end' | 'space-between';
  justifyItems?: '' | 'start' | 'center' | 'end';
  justifyContent?: '' | 'start' | 'center' | 'end' | 'space-between';
  /** @uxpinpropname Content */
  children?: ReactNode | undefined;
}

export const argTypes = {
  gap: {
    options: ['0', '3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
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
  children: {
    table: {
      disable: true,
    },
  },
};

export const LayoutFlow: React.FC<ILayoutFlowProps & React.HTMLAttributes<HTMLDivElement>> = ({
  gap = defaultArgs.gap,
  row = defaultArgs.row,
  wrap = defaultArgs.wrap,
  alignItems = defaultArgs.alignItems,
  alignContent = defaultArgs.alignContent,
  justifyItems = defaultArgs.justifyItems,
  justifyContent = defaultArgs.justifyContent,
  children,
  ...rootElementProps
}) => {
  return (
    <div
      className={clsx(
        row ? 'rvo-layout-row' : 'rvo-layout-column',
        alignItems && alignItems.length > 0 && `rvo-layout-align-items-${alignItems}`,
        alignContent && alignContent.length > 0 && `rvo-layout-align-content-${alignContent}`,
        justifyItems && justifyItems.length > 0 && `rvo-layout-justify-items-${justifyItems}`,
        justifyContent && justifyContent.length > 0 && `rvo-layout-justify-content-${justifyContent}`,
        gap && `rvo-layout-gap--${gap}`,
        wrap && 'rvo-layout--wrap',
      )}
      {...(!children && { style: { height: '300px' } })}
      {...rootElementProps}
    >
      {parseContentMarkup(children) || (
        <>
          <div>Element A</div>
          <div>Element B</div>
        </>
      )}
    </div>
  );
};

export default LayoutFlow;
