import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { Icon } from './src/template';

const meta: Meta<typeof Icon> = {
  title: 'Componenten/Icon',
  component: Icon,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'icon',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=50-13&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = { args: defaultArgs, name: 'Icon' };
