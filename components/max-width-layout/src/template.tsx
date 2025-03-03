/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
// @ts-ignore
import * as designTokens from '@nl-rvo/design-tokens/dist';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import parseContentMarkup from '../../utils/parseContentMarkup';
import './index.scss';
export interface IMaxWidthLayoutProps {
  size?: 'sm' | 'md' | 'lg';
  /** @uxpinignoreprop */
  content?: string;
  inlinePadding?: 'none' | 'sm' | 'md' | 'lg';
  centered?: boolean;
  /** @uxpinignoreprop */
  className?: string | string[];
  /** @uxpinpropname Content */
  children?: ReactNode | undefined;
}

export const argTypes = {
  size: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  content: {
    control: 'text',
  },
  centered: {
    control: 'boolean',
  },
  inlinePadding: {
    options: ['none', 'sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  children: {
    table: {
      disable: true,
    },
  },
};

export const MaxWidthLayout: React.FC<IMaxWidthLayoutProps> = ({
  size = defaultArgs.size,
  content = defaultArgs.content,
  inlinePadding = defaultArgs.inlinePadding,
  centered = defaultArgs.centered,
  children,
  className = [],
  ...props
}: IMaxWidthLayoutProps) => {
  let parsedContent = parseContentMarkup(children || content);

  if (!children && typeof parsedContent === 'string' && parsedContent.indexOf('{maxWidth}') > -1) {
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
        !centered && 'rvo-max-width-layout--uncentered',
        className,
      )}
      {...props}
    >
      {parsedContent}
    </div>
  );
};

export default MaxWidthLayout;
