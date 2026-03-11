import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { defaultArgs } from './src/defaultArgs';
import { ActionGroup } from './src/template';

const meta: Meta<typeof ActionGroup> = {
  title: 'Componenten/Action group',
  component: ActionGroup,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'action-group',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=4207-18737&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ActionGroup>;

export const Default: Story = {
  args: defaultArgs,
  name: 'Action group',
};
