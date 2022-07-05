/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';

export const argTypes = {
  labelType: {
    options: ['default', 'start', 'end'],
    control: { type: 'radio' },
  },
  disabled: {
    control: { type: 'boolean' },
  },
  label: {
    control: 'text',
  },
  link: {
    control: 'text',
  },
};

export const defaultArgs = {
  type: 'default',
  disabled: false,
  label: 'Step label',
  link: '#',
};

export const StepLabel = ({
  labelType = defaultArgs.labelType,
  disabled = defaultArgs.disabled,
  label = defaultArgs.label,
  link = defaultArgs.link,
}) => {
  if (!disabled && labelType === 'default') {
    return `<a href="${link}" class="${clsx(
      'rvo-progress-tracker__step-label',
      `rvo-progress-tracker__step-label--${labelType}`,
    )}">${label}</a>`;
  } else {
    return `<span class="${clsx('rvo-progress-tracker__step-label', `rvo-progress-tracker__step-label--${labelType}`, {
      'rvo-progress-tracker__step-label--disabled': disabled,
    })}">${label}</span>`;
  }
};
