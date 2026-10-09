/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import '@nl-rvo/css-form-fieldset';
import { IFieldsetProps } from './FormFieldSet.types';

export const Fieldset: React.FC<IFieldsetProps & React.HTMLAttributes<HTMLDivElement>> = ({
  legend,
  disabled,
  children,
  ...rootElementProps
}) => {
  return (
    <fieldset
      className={clsx('rvo-form-fieldset', disabled && 'rvo-form-fieldset--disabled')}
      role="group"
      {...rootElementProps}
    >
      {legend && <legend className="rvo-form-fieldset__legend">{legend}</legend>}
      {children}
    </fieldset>
  );
};

export default Fieldset;
