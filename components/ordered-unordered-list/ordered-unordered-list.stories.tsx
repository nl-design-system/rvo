import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { List } from './template';

const meta: Meta<typeof List> = {
  title: 'Componenten/Ordered & unordered list',
  component: List,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'list',
    },
  },
};
export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = { args: defaultArgs, name: 'Ordered & unordered list' };
