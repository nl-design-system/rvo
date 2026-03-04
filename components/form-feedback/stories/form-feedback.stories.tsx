import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/form-feedback/defaultArgs';
import { Feedback } from '@nl-rvo/component-library-react';

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
