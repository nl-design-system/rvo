import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/layout-flow/defaultArgs';
import { LayoutFlow } from '@nl-rvo/component-library-react';

const meta: Meta<typeof LayoutFlow> = {
  title: 'Layout/Flow',
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
