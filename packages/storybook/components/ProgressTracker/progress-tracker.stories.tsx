import { ProgressTracker } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

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

export default {
  title: 'Componenten/Progress Tracker',
  component: ProgressTracker,
  argTypes: {
    steps: {
      name: 'array',
      required: true,
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'progress-tracker',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=253-4158&embed-host=share',
    },
  },
} satisfies Meta<typeof ProgressTracker>;
type Story = StoryObj<typeof ProgressTracker>;

export const Base: Story = {
  args: {
    steps: defaultSteps,
  },
  name: 'Progress Tracker',
};
