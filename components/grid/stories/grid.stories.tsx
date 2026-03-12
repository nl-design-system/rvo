import { Grid } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/grid/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'grid',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Grid>;

export const Default: Story = { args: defaultArgs, name: 'Grid' };
