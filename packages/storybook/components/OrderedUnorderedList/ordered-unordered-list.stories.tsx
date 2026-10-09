import { List } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Ordered & unordered list',
  component: List,
  args: {
    type: 'unordered',
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
    bulletType: 'icon',
    bulletIcon: 'option-1',
    noMargin: true,
    noPadding: true,
  },
  argTypes: {
    type: {
      options: ['unordered', 'ordered'],
      control: { type: 'radio' },
    },
    items: {
      name: 'array',
      required: false,
    },
    bulletType: {
      if: { arg: 'type', eq: 'unordered' },
      options: ['disc', 'none', 'icon'],
      control: { type: 'radio' },
    },
    bulletIcon: {
      if: { arg: 'bulletType', eq: 'icon' },
      options: ['option-1', 'option-2', 'option-3'],
      control: { type: 'radio' },
    },
    noMargin: {
      control: 'boolean',
    },
    noPadding: {
      control: 'boolean',
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
      link: 'list',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=2734-3032&embed-host=share',
    },
  },
} satisfies Meta<typeof List>;
type Story = StoryObj<typeof List>;

export const Base: Story = {};
