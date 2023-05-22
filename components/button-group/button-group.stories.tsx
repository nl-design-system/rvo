import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { ButtonGroup } from './template';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Componenten/Button group',
  component: ButtonGroup,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'button-group',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = { args: defaultArgs, name: 'Button group' };
