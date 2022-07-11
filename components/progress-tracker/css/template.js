/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import './index.scss';
import { Step } from './template.step';

const defaultSteps = [
  { state: 'start', label: 'Progress Tracker', link: '#', size: 'md', line: 'straight' },
  { state: 'completed', label: 'Step completed', link: '#', size: 'md', line: 'straight' },
  { state: 'doing', label: 'Step doing', link: '#', size: 'md', line: 'straight' },
  { state: 'incomplete', label: 'Step incomplete', link: '#', size: 'md', line: 'substep-start' },
  { state: 'incomplete', label: 'First sub-step', link: '#', size: 'sm', line: 'straight' },
  { state: 'doing', label: 'Sub-step doing', link: '#', size: 'sm', line: 'straight' },
  { state: 'completed', label: 'Sub-step completed', link: '#', size: 'sm', line: 'straight' },
  { state: 'disabled', label: 'Sub-step disabled', link: '#', size: 'sm', line: 'straight' },
  { state: 'incomplete', label: 'Last sub-step', link: '#', size: 'sm', line: 'substep-end' },
  { state: 'disabled', label: 'Step disabled', link: '#', size: 'md', line: 'straight' },
  { state: 'end', label: 'Process completed', link: '#', size: 'md' },
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
