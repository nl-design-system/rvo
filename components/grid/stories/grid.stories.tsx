import { Grid } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/grid/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { argTypes } from './argTypes';

export default {
  title: 'Layout/Grid',
  component: Grid,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'grid',
    },
  },
} satisfies Meta<typeof Grid>;
type Story = StoryObj<typeof Grid>;

export const Default: Story = { args: defaultArgs, name: 'Grid' };
