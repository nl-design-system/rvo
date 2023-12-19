import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { SidebarLayout } from './template';

const meta: Meta<typeof SidebarLayout> = {
  title: 'Componenten/Layout/Sidebar layout',
  component: SidebarLayout,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'sidebar-layout',
    },
  },
};
export default meta;

type Story = StoryObj<typeof SidebarLayout>;

export const Default: Story = { args: defaultArgs, name: 'Sidebar layout' };
