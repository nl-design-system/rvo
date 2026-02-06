import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { defaultArgs } from './src/defaultArgs';
import { StatusIndicator } from './src/template';

const meta: Meta<typeof StatusIndicator> = {
  title: 'Componenten/Status indicator',
  component: StatusIndicator,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'status-indicator',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=2734-3033&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof StatusIndicator>;

export const Default: Story = { args: defaultArgs, name: 'Status indicator' };
