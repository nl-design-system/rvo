import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { MenuBar } from './template';

const meta: Meta<typeof MenuBar> = {
  title: 'Componenten/Menubar',
  component: MenuBar,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'menubar',
    },
  },
};
export default meta;

type Story = StoryObj<typeof MenuBar>;

export const Default: Story = { args: defaultArgs, name: 'Menubar' };
