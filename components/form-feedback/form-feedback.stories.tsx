import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { Feedback } from './src/template';

const meta: Meta<typeof Feedback> = {
  title: 'Componenten/Feedback',
  component: Feedback,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-feedback',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=377-10857&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Feedback>;

export const Default: Story = { args: defaultArgs, name: 'Feedback' };
