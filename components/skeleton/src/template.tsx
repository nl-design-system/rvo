/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import clsx from 'clsx';
import React, { CSSProperties, useMemo } from 'react';
import './index.scss';

type SkeletonCSSProperties = {
  '--rvo-skeleton-color'?: string;
  '--rvo-skeleton-animation-duration'?: string;
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

const isDefined = <T,>(value: T | undefined): value is T => value !== undefined;

export const Skeleton: React.FC<ISkeletonProps> = ({
  variant,
  animation,
  color = 'grijs-200',
  className,
  ...otherProps
}: ISkeletonProps) => {
  const { width, height, duration, ...spanProps } = otherProps;

  const styleProps: SkeletonCSSProperties = {
    width,
    height,
    '--rvo-skeleton-animation-duration': duration,
  };

  const classes: string = clsx('rvo-skeleton', className, {
    [`rvo-skeleton--${variant}`]: isDefined(variant),
    [`rvo-skeleton--${animation}`]: isDefined(animation),
    [`rvo-skeleton--${color}`]: isDefined(color),
  });
  const style: CSSProperties = useMemo(
    () => Object.fromEntries(Object.entries(styleProps).filter(([, value]) => isDefined(value))),
    [styleProps],
  );

  return (
    <span style={{ ...style, ...spanProps.style }} className={classes} {...spanProps}>
      &zwnj;
    </span>
  );
};

export default Skeleton;
