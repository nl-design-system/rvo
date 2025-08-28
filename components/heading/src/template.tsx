/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import clsx from 'clsx';
import React, { createElement, ReactNode } from 'react';
import parseContentMarkup from '../../utils/parseContentMarkup';
import './index.scss';

export interface IHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  noMargins?: boolean;
  fontWeightNormal?: boolean;
  children?: string | ReactNode;
  className?: string;
}

export const Heading: React.FC<IHeadingProps> = ({
  type,
  noMargins,
  fontWeightNormal,
  className,
  children,
  ...rest
}: IHeadingProps) => {
  const Tag = createElement(
    type,
    {
      className: clsx(
        `utrecht-heading-${type?.replace('h', '')}`,
        'rvo-heading',
        !noMargins && `rvo-heading--margin-${type?.replace('h', '')}`,
        fontWeightNormal && 'rvo-heading--normal',
        `rvo-heading--gap-${type === 'h1' || type === 'h2' ? 'sm' : 'xs'}`,
        className,
      ),
      ...rest,
    },
    children && parseContentMarkup(children),
  );

  return Tag;
};

export default Heading;
