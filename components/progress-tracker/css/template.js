/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import './index.scss';
import { Step } from './template.step';

const defaultSteps = [
  { state: 'start', labelType: 'start', disabled: false, label: 'Progress Tracker', link: '#', size: 'md' },
  { state: 'completed', labelType: 'default', disabled: false, label: 'Step completed', link: '#', size: 'md' },
  { state: 'doing', labelType: 'default', disabled: false, label: 'Step doing', link: '#', size: 'md' },
  { state: 'incomplete', labelType: 'default', disabled: false, label: 'Step incomplete', link: '#', size: 'md' },
  { state: 'incomplete', labelType: 'default', disabled: false, label: 'First sub-step', link: '#', size: 'sm' },
  { state: 'doing', labelType: 'default', disabled: false, label: 'Sub-step doing', link: '#', size: 'sm' },
  { state: 'completed', labelType: 'default', disabled: false, label: 'Sub-step completed', link: '#', size: 'sm' },
  { state: 'incomplete', labelType: 'default', disabled: true, label: 'Sub-step disabled', link: '#', size: 'sm' },
  { state: 'incomplete', labelType: 'default', disabled: false, label: 'Last sub-step', link: '#', size: 'sm' },
  { state: 'incomplete', labelType: 'default', disabled: true, label: 'Step disabled', link: '#', size: 'md' },
  { state: 'end', labelType: 'end', disabled: false, label: 'Process completed', link: '#', size: 'md' },
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
