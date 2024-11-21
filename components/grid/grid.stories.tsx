import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { Grid } from './src/template';

const meta: Meta<typeof Grid> = {
  title: 'Componenten/Layout/Grid',
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
