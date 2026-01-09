/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import clsx from 'clsx';
import React, { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import { Icon, iconNames as iconOptions } from '../../icon/src/template';
import { IconType } from '../../icon/src/types';
import '../../layout-flow/src/index.scss';
import './index.scss';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  kind?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'subtle' | 'warning-subtle' | 'warning';
  size?: 'xs' | 'sm' | 'md';
  label?: string | ReactNode;
  active?: boolean;
  busy?: boolean;
  focus?: boolean;
  focusVisible?: boolean;
  hover?: boolean;
  disabled?: boolean;
  showIcon?: 'no' | 'before' | 'after';
  icon?: IconType;
  iconAriaLabel?: string;
  fullWidth?: boolean;
  className?: string;
  alignToRightInGroup?: boolean;
  /** @uxpinpropname On Focus */
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  /** @uxpinpropname On Blur */
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  /** @uxpinpropname On Click */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const argTypes = {
  kind: {
    options: ['primary', 'secondary', 'tertiary', 'quaternary', 'subtle', 'warning-subtle', 'warning'],
    control: { type: 'radio' },
  },
  size: {
    options: ['xs', 'sm', 'md'],
    control: { type: 'radio' },
  },
  label: {
    control: 'text',
  },
  busy: {
    control: 'boolean',
  },
  focus: {
    control: 'boolean',
  },
  focusVisible: {
    control: 'boolean',
  },
  hover: {
    control: 'boolean',
  },
  disabled: {
    control: 'boolean',
  },
  showIcon: {
    options: ['no', 'before', 'after'],
    control: { type: 'radio' },
  },
  icon: {
    control: { type: 'select' },
    options: iconOptions,
  },
  iconAriaLabel: { control: 'text' },
  fullWidth: {
    control: 'boolean',
  },
  alignToRightInGroup: {
    table: {
      disable: true,
    },
  },
};

export const Button: React.FC<PropsWithChildren<IButtonProps>> = ({
  kind = defaultArgs.kind,
  size = defaultArgs.size,
  active = defaultArgs.active,
  busy = defaultArgs.busy,
  disabled = defaultArgs.disabled,
  focus = defaultArgs.focus,
  focusVisible = defaultArgs.focusVisible,
  hover = defaultArgs.hover,
  label = defaultArgs.label,
  children,
  showIcon = defaultArgs.showIcon,
  icon = defaultArgs.icon,
  iconAriaLabel = defaultArgs.iconAriaLabel,
  fullWidth = defaultArgs.fullWidth,
  className,
  alignToRightInGroup,
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
        'utrecht-button',
        `utrecht-button--${kind}-action`,
        size && `'utrecht-button--rvo-${size}`,
        fullWidth && 'utrecht-button--rvo-full-width',
        showIcon !== 'no' && `utrecht-button--icon-${showIcon}`,
        appearance && `utrecht-button--${appearance}`,
      )}
      disabled={disabled || undefined}
      {...otherProps}
    >
      {showIcon === 'before' && iconMarkup}
      {children || label}
      {showIcon === 'after' && iconMarkup}
    </button>
  );
};

export const AllButtonKinds: React.FC<IButtonProps> = (buttonArgs) => (
  <div>
    <p>
      <Button label="Button" {...buttonArgs} kind="primary" />
    </p>
    <p>
      <Button label="Button" {...buttonArgs} kind="secondary" />
    </p>
    <p>
      <Button label="Button" {...buttonArgs} kind="tertiary" />
    </p>
    <p>
      <Button label="Button" {...buttonArgs} kind="quaternary" />
    </p>
    <p>
      <Button label="Button" {...buttonArgs} kind="warning-subtle" />
    </p>
    <p>
      <Button label="Button" {...buttonArgs} kind="warning" />
    </p>
  </div>
);

export default Button;
