/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import { IconType } from '@nl-rvo/assets/icons/types';
import { Button as UtrechtButton } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React, { PropsWithChildren, ReactNode } from 'react';
import { Icon, iconNames as iconOptions } from '../../icon/css/template';
import '../../layout-column-row/css/index.scss';
import { defaultArgs } from './defaultArgs';
import './index.scss';

export interface IButtonProps {
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
  className?: string;
  alignToRightInGroup?: boolean;
  onFocus?: (event) => void;
  onBlur?: (event) => void;
  onClick?: (event) => void;
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
    control: 'select',
    options: iconOptions,
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
  className,
  alignToRightInGroup,
  ...otherProps
}: PropsWithChildren<IButtonProps>) => {
  const iconMarkup = <Icon icon={icon as any} size="md" />;

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
    <UtrechtButton
      className={clsx(
        className,
        kind === 'tertiary' && 'utrecht-button--rvo-tertiary-action',
        kind === 'quaternary' && 'utrecht-button--rvo-quaternary-action',
        active && 'utrecht-button--active',
        busy && 'utrecht-button--busy',
        hover && 'utrecht-button--hover',
        focus && 'utrecht-button--focus',
        focusVisible && 'utrecht-button--focus-visible',
        'rvo-layout-row-inline',
        size === 'xs' && 'rvo-layout-gap--xs',
        size === 'sm' && 'rvo-layout-gap--sm',
        size === 'md' && 'rvo-layout-gap--md',
        size === 'xs' && 'utrecht-button--rvo-xs',
        size === 'sm' && 'utrecht-button--rvo-sm',
        size === 'md' && 'utrecht-button--rvo-md',
        alignToRightInGroup && 'rvo-button-group__align-right',
      )}
      disabled={disabled || undefined}
      appearance={appearance}
      hint={kind === 'warning' || kind === 'warning-subtle' ? 'warning' : undefined}
      {...otherProps}
    >
      {showIcon === 'before' && iconMarkup}
      {children || label}
      {showIcon === 'after' && iconMarkup}
    </UtrechtButton>
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
