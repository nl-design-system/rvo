/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import '@utrecht/component-library-css';
import clsx from 'clsx';

export const argTypes = {
  kind: {
    options: ['primary', 'secondary', 'tertiary', 'quaternary', 'warning'],
    control: { type: 'radio' },
  },
  size: {
    options: ['small', 'medium'],
    mapping: { small: 'sm', medium: 'md' },
    control: { type: 'radio' },
  },
  textContent: {
    description: 'Button text',
    control: 'text',
  },
  busy: {
    description: 'Busy',
    control: 'boolean',
  },
  focus: {
    description: 'Focus',
    control: 'boolean',
  },
  focusVisible: {
    description: 'Focus visible',
    control: 'boolean',
  },
  hover: {
    description: 'Hover',
    control: 'boolean',
  },
  disabled: {
    description: 'Disabled',
    control: 'boolean',
  },
  showIcon: {
    options: ['no', 'before', 'after'],
    control: { type: 'radio' },
  },
};

export const defaultArgs = {
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

export const Button = ({
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

export const AllButtonKinds = (buttonArgs) => (
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
      <Button {...buttonArgs} kind="warning" />
    </p>
  </div>
);
