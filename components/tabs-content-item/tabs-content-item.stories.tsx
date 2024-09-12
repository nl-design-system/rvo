import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { TabsContentItem } from './template';

const meta: Meta<typeof TabsContentItem> = {
  title: 'Componenten/Tabs/Content Item',
  component: TabsContentItem,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'tabs',
    },
  },
};
export default meta;

type Story = StoryObj<typeof TabsContentItem>;

export const Default: Story = { args: defaultArgs, name: 'Tabs' };
