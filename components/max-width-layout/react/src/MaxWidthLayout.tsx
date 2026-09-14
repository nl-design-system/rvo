/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
// @ts-ignore
import * as designTokens from '@nl-rvo/design-tokens/dist';
import clsx from 'clsx';
import React from 'react';
import parseContentMarkup from '@nl-rvo/component-library-react/src/utils/parseContentMarkup';
import '@nl-rvo/css-max-width-layout';
import { IMaxWidthLayoutProps } from './MaxWidthLayout.types';

export const MaxWidthLayout: React.FC<IMaxWidthLayoutProps & React.HTMLAttributes<HTMLDivElement>> = ({
  size = 'md',
  content,
  inlinePadding = 'none',
  centered,
  children,
  className,
  ...rootElementProps
}) => {
  let parsedContent = parseContentMarkup(children || content);

  if (!children && typeof parsedContent === 'string' && parsedContent.indexOf('{maxWidth}') > -1) {
    let maxWidth = '';
    switch (size) {
      case 'sm':
        maxWidth = designTokens.rvoLayoutMaxWidthSm;
        break;
      case 'md':
        maxWidth = designTokens.rvoLayoutMaxWidthMd;
        break;
      case 'lg':
        maxWidth = designTokens.rvoLayoutMaxWidthLg;
        break;
    }
    parsedContent = parsedContent.replace(/{maxWidth}/g, maxWidth);
  }

  return (
    <div
      className={clsx(
        'rvo-max-width-layout',
        `rvo-max-width-layout--${size}`,
        `rvo-max-width-layout-inline-padding--${inlinePadding}`,
        !centered && 'rvo-max-width-layout--uncentered',
        className,
      )}
      {...rootElementProps}
    >
      {parsedContent}
    </div>
  );
};

export default MaxWidthLayout;
