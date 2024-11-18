import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { ActionGroup } from './template';

const meta: Meta<typeof ActionGroup> = {
  title: 'Componenten/Action group',
  component: ActionGroup,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'action-group',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ActionGroup>;

export const Default: Story = { args: defaultArgs, name: 'Action group' };
