import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { Tabs } from './src/template';

const meta: Meta<typeof Tabs> = {
  title: 'Componenten/Tabs',
  component: Tabs,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'tabs',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = { args: defaultArgs, name: 'Tabs' };
