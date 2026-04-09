import { LayoutFlow } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/layout-flow/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { argTypes } from './argTypes';

export default {
  title: 'Layout/Flow',
  component: LayoutFlow,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'layout-flow',
    },
  },
} satisfies Meta<typeof LayoutFlow>;
type Story = StoryObj<typeof LayoutFlow>;

export const Default: Story = { args: defaultArgs, name: 'Layout flow' };
