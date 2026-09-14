/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import { Icon } from '@nl-rvo/react-icon';
import '@nl-rvo/css-layout-flow';
import '@nl-rvo/css-button';
import { IButtonProps } from './Button.types';

export const Button: React.FC<IButtonProps> = ({
  kind = 'primary',
  size = 'md',
  disabled,
  label,
  children,
  showIcon,
  icon,
  iconAriaLabel,
  fullWidth = false,
  className,
  busy,
  ...otherProps
}: IButtonProps) => {
  const iconMarkup = <Icon icon={icon as any} size={size} ariaLabel={iconAriaLabel} />;

  let appearance: string | undefined;
  switch (kind) {
    case 'primary':
    case 'warning':
      appearance = 'primary-action-button';
      break;
    case 'secondary':
      appearance = 'secondary-action-button';
      break;
    case 'subtle':
    case 'warning-subtle':
      appearance = 'subtle-button';
      break;
  }

  return (
    <button
      className={clsx(
        className,
        'rvo-button',
        `rvo-button--${kind}`,
        size && `rvo-button--size-${size}`,
        fullWidth && 'rvo-button--full-width',
        showIcon && `rvo-button--icon-${showIcon}`,
        appearance && `rvo-button--${appearance}`,
      )}
      aria-busy={busy}
      disabled={disabled || undefined}
      {...otherProps}
    >
      {showIcon === 'before' && iconMarkup}
      {children || label}
      {showIcon === 'after' && iconMarkup}
    </button>
  );
};

export default Button;
