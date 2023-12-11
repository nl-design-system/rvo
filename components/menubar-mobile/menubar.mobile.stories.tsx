import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { MobileMenuBar } from './template';

const meta: Meta<typeof MobileMenuBar> = {
  title: 'Componenten/Mobile Menubar',
  component: MobileMenuBar,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'menubar-mobile',
    },
  },
};
export default meta;

type Story = StoryObj<typeof MobileMenuBar>;

export const Default: Story = { args: defaultArgs, name: 'Mobile Menubar' };
