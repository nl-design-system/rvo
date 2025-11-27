import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { StatusIcon } from './src/template';

const meta: Meta<typeof StatusIcon> = {
  title: 'Componenten/Icon/Status icon',
  component: StatusIcon,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'status-icon',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=50-13&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof StatusIcon>;

export const Default: Story = { args: defaultArgs, name: 'Status icon' };
