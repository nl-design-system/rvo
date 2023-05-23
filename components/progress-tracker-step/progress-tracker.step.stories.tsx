import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { ProgressTrackerStep } from './template';

const meta: Meta<typeof ProgressTrackerStep> = {
  title: 'Componenten/Progress Tracker/Step',
  component: ProgressTrackerStep,
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

type Story = StoryObj<typeof ProgressTrackerStep>;

export const Default: Story = { args: defaultArgs, name: 'Step' };
