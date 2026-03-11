import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { defaultArgs } from './src/defaultArgs';
import { Header } from './src/template';

const meta: Meta<typeof Header> = {
  title: 'Componenten/Header',
  component: Header,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'header',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=46-528&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = { args: defaultArgs, name: 'Header' };
