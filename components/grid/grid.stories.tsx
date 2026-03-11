import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { defaultArgs } from './src/defaultArgs';
import { Grid } from './src/template';

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
