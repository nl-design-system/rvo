import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { List } from './src/template';

const meta: Meta<typeof List> = {
  title: 'Componenten/Ordered & unordered list',
  component: List,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'list',
    },
  },
};
export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = { args: defaultArgs, name: 'Ordered & unordered list' };
