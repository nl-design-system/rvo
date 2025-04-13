/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import { isDefined } from '@nl-rvo/components/utils/guards';
import clsx from 'clsx';
import React, { CSSProperties } from 'react';
import './index.scss';

type SkeletonCSSProperties = {
  '--rvo-animation-duration'?: string;
} & CSSProperties;

export interface ISkeletonProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Alternatieve weergave van het component */
  variant?: 'circular';
  /** De gewenste animatie */
  animation?: 'shimmer' | 'pulse';
  /** De kleur van het component */
  color?:
    | 'hemelblauw'
    | 'lichtblauw'
    | 'donkerblauw'
    | 'grijs-100'
    | 'grijs-200'
    | 'grijs-300'
    | 'grijs-400'
    | 'grijs-500'
    | 'grijs-600';
  /** De duur van de animatie in `"2s"``"800ms"` */
  duration?: string;
  /** De breedte van het component `"100px"` `"50%"` **/
  width?: string;
  /** De hoogte van het component `"100px"` `"50%"` **/
  height?: string;
  /** Aanvullende class names **/
  className?: string;
}

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
