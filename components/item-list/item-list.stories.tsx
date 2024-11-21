import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { ItemList } from './src/template';

const meta: Meta<typeof ItemList> = {
  title: 'Componenten/Item list',
  component: ItemList,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'item-list',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ItemList>;

export const Default: Story = { args: defaultArgs, name: 'Item list' };
