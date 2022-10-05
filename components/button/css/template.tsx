/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import { Button as ButtonUtrecht } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React from 'react';
import { Icon, iconNames as iconOptions } from '../../icon/css/template';

export interface IButtonProps {
  key?: string | number;
  kind?: string;
  size?: string;
  textContent?: string;
  children?: React.ReactNode;
  active?: boolean;
  busy?: boolean;
  focus?: boolean;
  focusVisible?: boolean;
  hover?: boolean;
  disabled?: boolean;
  showIcon?: string;
  icon?: string;
  classNames?: string[];
}

export const argTypes = {
  kind: {
    options: ['primary', 'secondary', 'tertiary', 'quaternary', 'warning-subtle', 'warning'],
    control: { type: 'radio' },
  },
  size: {
    options: ['xs', 'sm', 'md'],
    control: { type: 'radio' },
  },
  textContent: {
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

export const defaultArgs: IButtonProps = {
  kind: 'primary',
  size: 'md',
  active: false,
  busy: false,
  disabled: false,
  focus: false,
  focusVisible: false,
  hover: false,
  textContent: '',
  showIcon: 'no',
  icon: iconOptions[0],
};

export const exampleArgs = {
  ...defaultArgs,
  textContent: 'Button',
};

export const Button: React.FC<IButtonProps> = ({
  kind = defaultArgs.kind,
  size = defaultArgs.size,
  active = defaultArgs.active,
  busy = defaultArgs.busy,
  disabled = defaultArgs.disabled,
  focus = defaultArgs.focus,
  focusVisible = defaultArgs.focusVisible,
  hover = defaultArgs.hover,
  textContent = defaultArgs.textContent,
  children,
  showIcon = defaultArgs.showIcon,
  icon = defaultArgs.icon,
  classNames = [],
}) => {
  const iconMarkup = <Icon icon={icon} size="md" />;

  let appearance: string = null;
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
    <ButtonUtrecht
      className={clsx(
        classNames,
        kind === 'tertiary' && 'utrecht-button--rvo-tertiary-action',
        kind === 'quaternary' && 'utrecht-button--rvo-quaternary-action',
        active && 'utrecht-button--active',
        busy && 'utrecht-button--busy',
        hover && 'utrecht-button--hover',
        focus && 'utrecht-button--focus',
        focusVisible && 'utrecht-button--focus-visible',
        'rvo-layout-row',
        size === 'xs' && 'rvo-layout-gap--xs',
        size === 'sm' && 'rvo-layout-gap--sm',
        size === 'md' && 'rvo-layout-gap--md',
        size === 'xs' && 'utrecht-button--rvo-xs',
        size === 'sm' && 'utrecht-button--rvo-sm',
        size === 'md' && 'utrecht-button--rvo-md',
      )}
      disabled={disabled || null}
      appearance={appearance}
      hint={kind === 'warning' || kind === 'warning-subtle' ? 'warning' : null}
    >
      {showIcon === 'before' && iconMarkup}
      {textContent}
      {children}
      {showIcon === 'after' && iconMarkup}
    </ButtonUtrecht>
  );
};

export const AllButtonKinds: React.FC<IButtonProps> = (buttonArgs) => (
  <div>
    <p>
      <Button textContent="Button" {...buttonArgs} kind="primary" />
    </p>
    <p>
      <Button textContent="Button" {...buttonArgs} kind="secondary" />
    </p>
    <p>
      <Button textContent="Button" {...buttonArgs} kind="tertiary" />
    </p>
    <p>
      <Button textContent="Button" {...buttonArgs} kind="quaternary" />
    </p>
    <p>
      <Button textContent="Button" {...buttonArgs} kind="warning-subtle" />
    </p>
    <p>
      <Button textContent="Button" {...buttonArgs} kind="warning" />
    </p>
  </div>
);
