/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import clsx from 'clsx';
import React, { CSSProperties } from 'react';
import { isDefined } from '@nl-rvo/component-library-react/src/utils/guards';
import '@nl-rvo/css-skeleton';
import { ISkeletonProps } from './Skeleton.types';

type SkeletonCSSProperties = {
  '--rvo-animation-duration'?: string;
} & CSSProperties;

export const Skeleton: React.FC<ISkeletonProps> = (props: ISkeletonProps) => {
  const { variant, animation, color = 'grijs-200', duration, width, height, className, style, ...otherProps } = props;

  const inlineStyle: SkeletonCSSProperties = { width, height, '--rvo-animation-duration': duration };

  return (
    <span
      className={clsx(
        className,
        'rvo-skeleton',
        isDefined(variant) && `rvo-skeleton--${variant}`,
        isDefined(animation) && `rvo-skeleton--${animation}`,
        isDefined(color) && `rvo-skeleton--${color}`,
      )}
      style={{ ...style, ...inlineStyle }}
      {...otherProps}
    >
      &zwnj;
    </span>
  );
};

export default Skeleton;
