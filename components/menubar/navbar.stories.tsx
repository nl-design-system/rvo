import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArguments';
import NavbarMenuBar from './src/menubar/template';

const meta: Meta<typeof NavbarMenuBar> = {
  title: 'Componenten/Menubar/Navbar',
  component: NavbarMenuBar,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'menubar',
    },
  },
};
export default meta;

type Story = StoryObj<typeof NavbarMenuBar>;

export const Default: Story = { args: defaultArgs, name: 'Menubar' };
