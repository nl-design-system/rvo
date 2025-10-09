/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import './index.scss';

export interface ILabelProps extends HTMLAttributes<HTMLLabelElement> {
  id?: string;
  htmlFor?: string;
  small?: boolean;
  type?: 'optional' | 'required';
  className?: string;
}

export const Label: React.FC<ILabelProps> = ({ small, type, className, children, ...otherProps }: ILabelProps) => {
  return (
    <label
      className={clsx(
        'rvo-label',
        className,
        small && 'rvo-label--sm',
        type && 'rvo-label--has-after-field',
        (type === 'optional' || type === 'required') && `rvo-label--${type}`,
      )}
      {...otherProps}
    >
      {children}
    </label>
  );
};

export default Label;
