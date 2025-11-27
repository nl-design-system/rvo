import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { Toggle } from './src/template';

const meta: Meta<typeof Toggle> = {
  title: 'Componenten/Toggle',
  component: Toggle,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'toggle',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=2734-3038&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = { args: defaultArgs, name: 'Toggle' };
