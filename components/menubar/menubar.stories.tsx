import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { MenuBar } from './src/template';

const meta: Meta<typeof MenuBar> = {
  title: 'Componenten/Menubar',
  component: MenuBar,
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

type Story = StoryObj<typeof MenuBar>;

export const Default: Story = { args: defaultArgs, name: 'Menubar' };
