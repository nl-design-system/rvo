import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { SidebarLayout } from './src/template';

const meta: Meta<typeof SidebarLayout> = {
  title: 'Layout/Sidebar layout',
  component: SidebarLayout,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'sidebar-layout',
    },
  },
};
export default meta;

type Story = StoryObj<typeof SidebarLayout>;

export const Default: Story = { args: defaultArgs, name: 'Sidebar layout' };
