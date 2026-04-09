import { SidebarLayout } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/sidebar-layout/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { argTypes } from './argTypes';

export default {
  title: 'Layout/Sidebar layout',
  component: SidebarLayout,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'sidebar-layout',
    },
  },
} satisfies Meta<typeof SidebarLayout>;
type Story = StoryObj<typeof SidebarLayout>;

export const Default: Story = { args: defaultArgs, name: 'Sidebar layout' };
