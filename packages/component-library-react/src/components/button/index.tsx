/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import clsx from 'clsx';
import React, { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { Icon } from '../icon';
import { IconType } from '../icon/types';
import '@nl-rvo/component-library-css/dist/components/layout-flow.css';
import '@nl-rvo/component-library-css/dist/components/button.css';
export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  kind?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'subtle' | 'warning-subtle' | 'warning';
  size?: 'xs' | 'sm' | 'md';
  label: string | ReactNode;
  disabled?: boolean;
  showIcon?: 'before' | 'after';
  icon?: IconType;
  iconAriaLabel?: string;
  busy?: boolean;
  fullWidth?: boolean;
  className?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<PropsWithChildren<IButtonProps>> = ({
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
}: PropsWithChildren<IButtonProps>) => {
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
