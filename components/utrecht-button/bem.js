/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';

export const defaultArgs = {
  active: false,
  busy: false,
  disabled: false,
  focus: false,
  focusVisible: false,
  hover: false,
  textContent: '',
  type: 'button',
};

export const Button = ({
  active = false,
  busy = false,
  disabled = false,
  focus = false,
  focusVisible = false,
  hover = false,
  textContent = '',
  type = 'button',
}) =>
  `<button class="${clsx('rvo-button', {
    'rvo-button--active': active,
    'rvo-button--busy': busy,
    'rvo-button--hover': hover,
    'rvo-button--focus': focus,
    'rvo-button--focus-visible': focusVisible,
    'rvo-button--disabled': disabled,
  })}"${disabled ? ' aria-disabled="true"' : ''} type="${type}">${textContent}</button>`;
