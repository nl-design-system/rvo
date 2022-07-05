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
};

export const defaultArgs = {
  state: 'incomplete',
};

export const StepIcon = ({ state = defaultArgs.state }) =>
  `<div class="${clsx('rvo-progress-tracker__step-icon', `rvo-progress-tracker__step-icon--${state}`)}"></div>`;
