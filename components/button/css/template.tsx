/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import '@utrecht/component-library-css';
import clsx from 'clsx';
import React from 'react';

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
}

export const argTypes = {
  kind: {
    options: ['primary', 'secondary', 'tertiary', 'quaternary', 'warning-subtle', 'warning'],
    control: { type: 'radio' },
  },
  size: {
    options: ['sm', 'md'],
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
};

export const defaultArgs: IButtonProps = {
  kind: 'primary',
  size: 'medium',
  active: false,
  busy: false,
  disabled: false,
  focus: false,
  focusVisible: false,
  hover: false,
  textContent: 'Button',
  showIcon: 'no',
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
}) => {
  const icon = <div className={`rvo-button__icon--${kind}-action rvo-icon rvo-icon--plus rvo-icon--md`}></div>;
  return (
    <button
      className={clsx('utrecht-button', {
        'utrecht-button--primary-action': kind === 'primary',
        'utrecht-button--secondary-action': kind === 'secondary',
        'rvo-button--tertiary-action': kind === 'tertiary',
        'rvo-button--quaternary-action': kind === 'quaternary',
        'rvo-button--warning-subtle-action': kind === 'warning-subtle',
        'rvo-button--warning-action': kind === 'warning',
        'rvo-button--sm': size === 'sm',
        'rvo-button--md': size === 'md',
        'utrecht-button--active': active,
        'utrecht-button--busy': busy,
        'utrecht-button--hover': hover,
        'utrecht-button--focus': focus,
        'utrecht-button--focus-visible': focusVisible,
        'utrecht-button--disabled': disabled,
      })}
      aria-disabled={disabled || null}
    >
      {showIcon === 'before' && icon}
      {textContent}
      {showIcon === 'after' && icon}
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
