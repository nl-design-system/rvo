/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
// @ts-ignore
import * as designTokens from '@nl-rvo/design-tokens/dist';
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import { defaultArgs } from './defaultArgs';
import './index.scss';
export interface IMaxWidthLayoutProps {
  size?: string;
  content?: string;
  inlinePadding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string | string[];
}

export const argTypes = {
  size: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  content: {
    control: 'text',
  },
  inlinePadding: {
    options: ['none', 'sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
};

export const MaxWidthLayout: React.FC<PropsWithChildren<IMaxWidthLayoutProps>> = ({
  size = defaultArgs.size,
  content = defaultArgs.content,
  inlinePadding = defaultArgs.inlinePadding,
  children,
  className = [],
}: PropsWithChildren<IMaxWidthLayoutProps>) => {
  let parsedContent = children || content;

  if (typeof parsedContent === 'string' && parsedContent.indexOf('{maxWidth}') > -1) {
    let maxWidth;
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
        className,
      )}
    >
      {parsedContent}
    </div>
  );
};

export default MaxWidthLayout;
