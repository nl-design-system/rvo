/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import '@utrecht/component-library-css';
import clsx from 'clsx';

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
  type: 'button',
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
  type = defaultArgs.type,
}) =>
  `<button class="${clsx('utrecht-button', {
    'utrecht-button--primary-action': kind === 'primary',
    'utrecht-button--secondary-action': kind === 'secondary',
    'rvo-button--tertiary-action': kind === 'tertiary',
    'rvo-button--quaternary-action': kind === 'quaternary',
    'rvo-button--small': size === 'small',
    'rvo-button--medium': size === 'medium',
    'utrecht-button--active': active,
    'utrecht-button--busy': busy,
    'utrecht-button--hover': hover,
    'utrecht-button--focus': focus,
    'utrecht-button--focus-visible': focusVisible,
    'utrecht-button--disabled': disabled,
  })}"${disabled ? ' aria-disabled="true"' : ''} type="${type}">${textContent}</button>`;
