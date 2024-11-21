import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { StatusIndicator } from './src/template';

const meta: Meta<typeof StatusIndicator> = {
  title: 'Componenten/Status indicator',
  component: StatusIndicator,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'status-indicator',
    },
  },
};
export default meta;

type Story = StoryObj<typeof StatusIndicator>;

export const Default: Story = { args: defaultArgs, name: 'Status indicator' };
