import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { ProgressTracker } from './template';

const meta: Meta<typeof ProgressTracker> = {
  title: 'Componenten/Progress Tracker',
  component: ProgressTracker,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'progress-tracker',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ProgressTracker>;

export const Default: Story = { args: defaultArgs, name: 'Progress Tracker' };
