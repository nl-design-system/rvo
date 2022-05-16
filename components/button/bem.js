/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */

import clsx from 'clsx';

export const defaultArgs = {
  kind: 'primary',
  active: false,
  disabled: false,
  focus: false,
  hover: false,
  textContent: 'Button',
};

export const Button = ({
  kind = defaultArgs.kind,
  active = defaultArgs.active,
  disabled = defaultArgs.disabled,
  focus = defaultArgs.focus,
  hover = defaultArgs.hover,
  textContent = '',
}) =>
  `<button class="${clsx('rvo-button', {
    'rvo-button--primary': kind === 'primary',
    'rvo-button--secondary': kind === 'secondary',
    'rvo-button--tertiary': kind === 'tertiary',
    'rvo-button--quaternary': kind === 'quaternary',
    'rvo-button--active': active,
    'rvo-button--hover': hover,
    'rvo-button--focus': focus,
    'rvo-button--disabled': disabled,
  })}"${disabled ? ' aria-disabled="true"' : ''}>${textContent}</button>`;
