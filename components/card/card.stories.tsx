import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { Card } from './template';

const meta: Meta<typeof Card> = {
  title: 'Componenten/Card',
  component: Card,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'card',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = { args: defaultArgs, name: 'Card' };
