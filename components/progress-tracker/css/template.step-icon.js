/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';

export const argTypes = {
  state: {
    options: ['start', 'incomplete', 'doing', 'completed', 'disabled', 'end'],
    control: { type: 'radio' },
  },
  size: {
    options: ['small', 'medium'],
    mapping: { small: 'sm', medium: 'md' },
    control: { type: 'radio' },
  },
};

export const defaultArgs = {
  state: 'incomplete',
  size: 'medium',
};

export const StepIcon = ({ state = defaultArgs.state, size = defaultArgs.size }) =>
  `<div class="${clsx(
    'rvo-progress-tracker__step-icon',
    `rvo-progress-tracker__step-icon--${state}`,
    size === 'sm' && `rvo-progress-tracker__step-icon--${size}`,
  )}"></div>`;
