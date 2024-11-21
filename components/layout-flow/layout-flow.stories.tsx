import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { LayoutFlow } from './src/template';

const meta: Meta<typeof LayoutFlow> = {
  title: 'Componenten/Layout/Layout flow',
  component: LayoutFlow,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'layout-flow',
    },
  },
};
export default meta;

type Story = StoryObj<typeof LayoutFlow>;

export const Default: Story = { args: defaultArgs, name: 'Layout flow' };
