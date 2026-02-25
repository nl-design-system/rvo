import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Alert, argTypes } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/alert/defaultArgs';

const meta: Meta<typeof Alert> = {
  title: 'Componenten/Alert',
  component: Alert,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'alert',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=46-516&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: defaultArgs,
  name: 'Alert',
};
