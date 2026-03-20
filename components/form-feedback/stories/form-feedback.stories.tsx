import { Feedback } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/form-feedback/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { argTypes } from './argTypes';

export default {
  title: 'Componenten/Feedback',
  component: Feedback,
  args: defaultArgs,
  argTypes,
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
} satisfies Meta<typeof Feedback>;
type Story = StoryObj<typeof Feedback>;

export const Default: Story = { args: defaultArgs, name: 'Feedback' };
