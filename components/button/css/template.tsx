/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import '@utrecht/component-library-css';
import clsx from 'clsx';
import React from 'react';
import { options as iconOptions } from '../../icon/css/template';

export interface IButtonProps {
  kind?: string;
  size?: string;
  textContent: string;
  active?: boolean;
  busy?: boolean;
  focus?: boolean;
  focusVisible?: boolean;
  hover?: boolean;
  disabled?: boolean;
  showIcon?: string;
  icon?: string;
  children?: React.ReactNode;
  className?: string;
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
  textContent: 'Button',
  showIcon: 'no',
  icon: iconOptions[0],
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
  showIcon = defaultArgs.showIcon,
  icon = defaultArgs.icon,
  className = '',
}) => {
  const iconMarkup = (
    <div className={clsx(`rvo-button__icon--${kind}-action`, 'rvo-icon', `rvo-icon-${icon}`, 'rvo-icon--md')}></div>
  );
  return (
    <button
      className={clsx(
        'utrecht-button',
        className,
        kind === 'primary' && 'utrecht-button--primary-action',
        kind === 'secondary' && 'utrecht-button--secondary-action',
        kind === 'tertiary' && 'rvo-button--tertiary-action',
        kind === 'quaternary' && 'rvo-button--quaternary-action',
        kind === 'warning-subtle' && 'rvo-button--warning-subtle-action',
        kind === 'warning' && 'rvo-button--warning-action',
        active && 'utrecht-button--active',
        busy && 'utrecht-button--busy',
        hover && 'utrecht-button--hover',
        focus && 'utrecht-button--focus',
        focusVisible && 'utrecht-button--focus-visible',
        disabled && 'utrecht-button--disabled',
        'rvo-layout-row',
        size === 'xs' && 'rvo-layout-gap--xs',
        size === 'sm' && 'rvo-layout-gap--sm',
        size === 'md' && 'rvo-layout-gap--md',
        size === 'xs' && 'rvo-button--xs',
        size === 'sm' && 'rvo-button--sm',
        size === 'md' && 'rvo-button--md',
      )}
      aria-disabled={disabled || null}
    >
      {showIcon === 'before' && iconMarkup}
      {textContent}
      {showIcon === 'after' && iconMarkup}
    </button>
  );
};

export const AllButtonKinds: React.FC<IButtonProps> = (buttonArgs) => (
  <div>
    <p>
      <Button {...buttonArgs} kind="primary" />
    </p>
    <p>
      <Button {...buttonArgs} kind="secondary" />
    </p>
    <p>
      <Button {...buttonArgs} kind="tertiary" />
    </p>
    <p>
      <Button {...buttonArgs} kind="quaternary" />
    </p>
    <p>
      <Button {...buttonArgs} kind="warning-subtle" />
    </p>
    <p>
      <Button {...buttonArgs} kind="warning" />
    </p>
  </div>
);
