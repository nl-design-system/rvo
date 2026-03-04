import { SidebarLayout } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/sidebar-layout/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

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
