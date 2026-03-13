import { ProgressTracker } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/progress-tracker/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { argTypes } from './argTypes';

export default {
  title: 'Componenten/Progress Tracker',
  component: ProgressTracker,
  args: defaultArgs,
  argTypes,
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

export const Default: Story = { args: defaultArgs, name: 'Progress Tracker' };
