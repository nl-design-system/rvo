import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { ProgressTracker } from './src/template';

const meta: Meta<typeof ProgressTracker> = {
  title: 'Componenten/Progress Tracker',
  component: ProgressTracker,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'progress-tracker',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ProgressTracker>;

export const Default: Story = { args: defaultArgs, name: 'Progress Tracker' };
