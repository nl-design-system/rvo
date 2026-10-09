/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import parseContentMarkup from '@nl-rvo/component-library-react/src/utils/parseContentMarkup';
import '@nl-rvo/css-layout-flow';
import { ILayoutFlowProps } from './LayoutFlow.types';

export const LayoutFlow: React.FC<ILayoutFlowProps & React.HTMLAttributes<HTMLDivElement>> = ({
  gap = 'md',
  row,
  wrap,
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
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
