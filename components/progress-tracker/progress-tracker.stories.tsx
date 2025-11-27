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
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=253-4158&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ProgressTracker>;

export const Default: Story = { args: defaultArgs, name: 'Progress Tracker' };
