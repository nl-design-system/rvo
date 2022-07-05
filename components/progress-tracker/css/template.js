/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import './index.scss';
import { Step } from './template.step';

const defaultSteps = [
  { state: 'start', labelType: 'start', disabled: false, label: 'Progress Tracker', link: '#', size: 'md' },
];

export const argTypes = {
  steps: {
    type: {
      name: 'array',
      required: true,
    },
  },
};

export const defaultArgs = {
  steps: defaultSteps,
};

export const ProgressTracker = ({ steps = defaultArgs.steps }) => {
  let stepsMarkup = '';
  steps.forEach((stepArgs) => {
    stepsMarkup += Step(stepArgs);
  });
  return `<div class="rvo-progress-tracker">${stepsMarkup}</div>`;
};
