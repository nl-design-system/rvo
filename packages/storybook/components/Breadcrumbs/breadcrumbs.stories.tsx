import { Breadcrumbs } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    items: {
      control: 'object',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    children: {
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
      link: 'breadcrumbs',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=373-9578&embed-host=share',
    },
  },
} satisfies Meta<typeof Breadcrumbs>;
type Story = StoryObj<typeof Breadcrumbs>;

export const Base: Story = {
  args: {
    items: [
      { label: 'Item 1', link: 'www.google.nl' },
      { label: 'Item 2', link: 'www.google.nl' },
    ],
  },
  name: 'Breadcrumbs',
};
