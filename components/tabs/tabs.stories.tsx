import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { Tabs } from './template';

const meta: Meta<typeof Tabs> = {
  title: 'Componenten/Tabs',
  component: Tabs,
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

type Story = StoryObj<typeof Tabs>;

export const Default: Story = { args: defaultArgs, name: 'Tabs' };
