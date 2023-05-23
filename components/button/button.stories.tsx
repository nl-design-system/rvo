import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { argTypes, Button } from './template';

const meta: Meta<typeof Button> = {
  title: 'Componenten/Button',
  component: Button,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'button',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = { args: defaultArgs, name: 'Button' };
