/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */

import clsx from 'clsx';
import React, { ReactNode, useEffect, useRef } from 'react';
import { defaultArgs } from './defaultArgs';
import parseContentMarkup from '../../utils/parseContentMarkup';
import '@nl-rvo/css-scrollable-content/dist/index.css';

export interface IScrollableContentProps {
  height?: number;
  useAsMinimumHeight?: boolean;
  /** @uxpinignoreprop */
  content?: string;
  /** @uxpinpropname Content */
  children?: ReactNode | undefined;
  disableScroll?: boolean;
  /** @uxpinignoreprop */
  useStyleAttribute?: boolean;
}

export const argTypes = {
  height: {
    control: 'number',
  },
  content: {
    control: 'text',
  },
  children: {
    table: {
      disable: true,
    },
  },
  disableScroll: {
    table: {
      disable: true,
    },
  },
  useStyleAttribute: {
    table: {
      disable: true,
    },
  },
};

export const ScrollableContent: React.FC<IScrollableContentProps & React.HTMLAttributes<HTMLDivElement>> = ({
  content,
  children,
  height = defaultArgs.height,
  useAsMinimumHeight = defaultArgs.useAsMinimumHeight,
  disableScroll = defaultArgs.disableScroll,
  useStyleAttribute = defaultArgs.useStyleAttribute,
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
      {parseContentMarkup(children || content)}
    </div>
  );
};

export default ScrollableContent;
