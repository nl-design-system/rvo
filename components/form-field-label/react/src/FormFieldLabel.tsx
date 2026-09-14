/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import { ILabelProps } from './FormFieldLabel.types';
import '@nl-rvo/css-form-field-label';

export const FormFieldLabel: React.FC<ILabelProps> = ({
  small,
  type,
  className,
  children,
  ...otherProps
}: ILabelProps) => {
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

export default FormFieldLabel;
