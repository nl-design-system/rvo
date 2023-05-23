import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { Alert, argTypes } from './template';

const meta: Meta<typeof Alert> = {
  title: 'Componenten/Alert',
  component: Alert,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'alert',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = { args: defaultArgs, name: 'Alert' };
