import { ItemList } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Item list',
  component: ItemList,
  args: {
    items: ['List item', 'List item', 'List item'],
  },
  argTypes: {
    items: {
      name: 'array',
      required: true,
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
      link: 'item-list',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=2734-2220&embed-host=share',
    },
  },
} satisfies Meta<typeof ItemList>;
type Story = StoryObj<typeof ItemList>;

export const Base: Story = {};
