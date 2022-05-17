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
  `<button class="${clsx('rvo-old-button', {
    'rvo-old-button--primary': kind === 'primary',
    'rvo-old-button--secondary': kind === 'secondary',
    'rvo-old-button--tertiary': kind === 'tertiary',
    'rvo-old-button--quaternary': kind === 'quaternary',
    'rvo-old-button--active': active,
    'rvo-old-button--hover': hover,
    'rvo-old-button--focus': focus,
    'rvo-old-button--disabled': disabled,
  })}"${disabled ? ' aria-disabled="true"' : ''}>${textContent}</button>`;
