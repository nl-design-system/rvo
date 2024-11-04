import { IProgressTrackerProps } from './template';

export const defaultSteps = [
  { state: 'start' as const, label: 'Progress Tracker', link: '#', size: 'md' as const, line: 'straight' as const },
  { state: 'completed' as const, label: 'Step completed', link: '#', size: 'md' as const, line: 'straight' as const },
  { state: 'doing' as const, label: 'Step doing', link: '#', size: 'md' as const, line: 'straight' as const },
  {
    state: 'incomplete' as const,
    label: 'Step incomplete',
    link: '#',
    size: 'md' as const,
    line: 'substep-start' as const,
  },
  { state: 'incomplete' as const, label: 'First sub-step', link: '#', size: 'sm' as const, line: 'straight' as const },
  { state: 'doing' as const, label: 'Sub-step doing', link: '#', size: 'sm' as const, line: 'straight' as const },
  {
    state: 'completed' as const,
    label: 'Sub-step completed',
    link: '#',
    size: 'sm' as const,
    line: 'straight' as const,
  },
  { state: 'disabled' as const, label: 'Sub-step disabled', link: '#', size: 'sm' as const, line: 'straight' as const },
  {
    state: 'incomplete' as const,
    label: 'Last sub-step',
    link: '#',
    size: 'sm' as const,
    line: 'substep-end' as const,
  },
  { state: 'disabled' as const, label: 'Step disabled', link: '#', size: 'md' as const, line: 'straight' as const },
  { state: 'end' as const, label: 'Process completed', link: '#', size: 'md' as const, line: 'none' as const },
];

export const defaultArgs: IProgressTrackerProps = {
  steps: defaultSteps,
};
