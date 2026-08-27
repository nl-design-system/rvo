import { PageNumberNavigation } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Page Number Navigation',
  component: PageNumberNavigation,
  args: {
    numberOfPages: 30,
    activePage: 10,
  },
  argTypes: {
    numberOfPages: {
      control: 'number',
    },
    activePage: {
      control: 'number',
    },
    onPageChange: {
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
      link: 'page-number-navigation',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=220-4774&embed-host=share',
    },
  },
} satisfies Meta<typeof PageNumberNavigation>;
type Story = StoryObj<typeof PageNumberNavigation>;

export const Base: Story = {};
