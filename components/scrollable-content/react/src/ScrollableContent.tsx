/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */

import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import parseContentMarkup from '@nl-rvo/component-library-react/src/utils/parseContentMarkup';
import '@nl-rvo/css-scrollable-content';
import { IScrollableContentProps } from './ScrollableContent.types';

export const ScrollableContent: React.FC<IScrollableContentProps> = ({
  children,
  height = 300,
  useAsMinimumHeight,
  disableScroll,
  useStyleAttribute,
  ...rootElementProps
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!useStyleAttribute && containerRef.current && !disableScroll) {
      containerRef.current.style.maxHeight = `${height}px`;
      if (useAsMinimumHeight) {
        containerRef.current.style.minHeight = `${height}px`;
      }
    }
  }, [height, disableScroll, useStyleAttribute, useAsMinimumHeight]);

  return (
    <div
      ref={containerRef}
      className={clsx(!disableScroll && 'rvo-scrollable-content')}
      {...(useStyleAttribute === true
        ? { style: { maxHeight: `${height}px`, minHeight: useAsMinimumHeight ? `${height}px` : undefined } }
        : {})}
      {...rootElementProps}
    >
      {parseContentMarkup(children)}
    </div>
  );
};

export default ScrollableContent;
