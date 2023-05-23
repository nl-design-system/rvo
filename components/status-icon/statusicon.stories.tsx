import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { StatusIcon } from './template';

const meta: Meta<typeof StatusIcon> = {
  title: 'Componenten/Icon/Status icon',
  component: StatusIcon,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'status-icon',
    },
  },
};
export default meta;

type Story = StoryObj<typeof StatusIcon>;

export const Default: Story = { args: defaultArgs, name: 'Status icon' };
