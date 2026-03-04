import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/header/defaultArgs';
import { Header } from '@nl-rvo/component-library-react';

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
