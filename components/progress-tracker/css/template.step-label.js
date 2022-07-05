/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';

export const argTypes = {
  type: {
    options: ['default', 'start title', 'end title'],
    mapping: { default: 'default', 'start title': 'start', 'end title': 'end' },
    control: { type: 'radio' },
  },
  disabled: {
    control: { type: 'boolean' },
  },
  size: {
    options: ['small', 'medium'],
    mapping: { small: 'sm', medium: 'md' },
    control: { type: 'radio' },
  },
  textContent: {
    control: 'text',
  },
  link: {
    control: 'text',
  },
};

export const defaultArgs = {
  type: 'default',
  disabled: false,
  textContent: 'Step label',
  link: '#',
};

export const StepLabel = ({
  type = defaultArgs.type,
  disabled = defaultArgs.disabled,
  textContent = defaultArgs.textContent,
  link = defaultArgs.link,
}) => {
  if (!disabled && type === 'default') {
    return `<a href="${link}" class="${clsx(
      'rvo-progress-tracker__step-label',
      `rvo-progress-tracker__step-label--${type}`,
    )}">${textContent}</a>`;
  } else {
    return `<span class="${clsx('rvo-progress-tracker__step-label', `rvo-progress-tracker__step-label--${type}`, {
      'rvo-progress-tracker__step-label--disabled': disabled,
    })}">${textContent}</span>`;
  }
};
