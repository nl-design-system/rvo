import { Header } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { argTypes } from './argTypes';
import { defaultArgs } from './defaultArgs';

export default {
  title: 'Componenten/Header',
  component: Header,
  args: defaultArgs,
  argTypes,
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
} satisfies Meta<typeof Header>;
type Story = StoryObj<typeof Header>;

export const Default: Story = { args: defaultArgs, name: 'Header' };
