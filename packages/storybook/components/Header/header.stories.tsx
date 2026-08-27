import { Header } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Header',
  component: Header,
  args: {
    title: 'Rijksdienst voor Ondernemend Nederland',
    subtitle: '',
    link: '',
  },
  argTypes: {
    title: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
    children: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
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

export const Base: Story = {};
