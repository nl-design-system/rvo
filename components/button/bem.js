/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */

import clsx from 'clsx';

export const defaultArgs = {
  kind: 'primary',
  active: false,
  busy: false,
  disabled: false,
  focus: false,
  hover: false,
  textContent: 'Button',
};

export const Button = ({
  active = false,
  busy = false,
  disabled = false,
  focus = false,
  hover = false,
  textContent = '',
}) =>
  `<button class="${clsx('rvo-button', {
    'rvo-button--active': active,
    'rvo-button--busy': busy,
    'rvo-button--hover': hover,
    'rvo-button--focus': focus,
    'rvo-button--disabled': disabled,
  })}"${disabled ? ' aria-disabled="true"' : ''}>${textContent}</button>`;
