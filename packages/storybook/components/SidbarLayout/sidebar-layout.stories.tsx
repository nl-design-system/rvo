import { SidebarLayout } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Layout/Sidebar layout',
  component: SidebarLayout,
  args: {
    maxWidthLayoutSize: 'md',
    sidebarPosition: 'left',
    sidebarBackgroundColor: true,
    sidebarContent: 'Sidebar',
    children: 'Content',
  },
  argTypes: {
    maxWidthLayoutSize: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    sidebarPosition: {
      options: ['left', 'right'],
      control: { type: 'radio' },
    },
    sidebarBackgroundColor: {
      control: 'boolean',
    },
    sidebarContent: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
  },
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

export const Base: Story = { name: 'Basis Component' };
