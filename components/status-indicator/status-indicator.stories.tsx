import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { StatusIndicator } from './template';

const meta: Meta<typeof StatusIndicator> = {
  title: 'Componenten/Status indicator',
  component: StatusIndicator,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'status-indicator',
    },
  },
};
export default meta;

type Story = StoryObj<typeof StatusIndicator>;

export const Default: Story = { args: defaultArgs, name: 'Status indicator' };
