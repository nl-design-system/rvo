/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import '@nl-rvo/css-form-textarea';
import clsx from 'clsx';
import React, { useState } from 'react';
import { ITextareaProps } from './FormTextArea.types';

export const Textarea: React.FC<ITextareaProps> = ({
  invalid,
  value,
  maxLength,
  maxLengthIndicator,
  ...otherProps
}: ITextareaProps) => {
  const [currentValue, setCurrentValue] = useState<string | undefined>(value as string | undefined);

  if (maxLength && maxLengthIndicator) {
    // Override onChange
    otherProps.onChange = (event) => {
      otherProps.onChange?.(event);
      setCurrentValue(event.currentTarget.value);
    };
    return (
      <div className={clsx('rvo-layout-column', 'rvo-layout-gap--xs')}>
        <textarea
          {...otherProps}
          className={clsx('rvo-textarea', 'rvo-textarea--html-textarea', invalid && 'rvo-textarea--invalid')}
          aria-invalid={invalid}
        />
        <span className="rvo-textarea__remaining-chars">
          Nog <strong>{maxLength - (currentValue?.length || 0)}</strong> teken
          {maxLength - (currentValue?.length || 0) > 1 && 's'} over
        </span>
      </div>
    );
  } else {
    return (
      <textarea
        {...otherProps}
        className={clsx('rvo-textarea', 'rvo-textarea--html-textarea', invalid && 'rvo-textarea--invalid')}
        aria-invalid={invalid}
      />
    );
  }
};

export default Textarea;
