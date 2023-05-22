import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { Feedback } from './template';

const meta: Meta<typeof Feedback> = {
  title: 'Componenten/Form/Feedback',
  component: Feedback,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'form-feedback',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Feedback>;

export const Default: Story = { args: defaultArgs, name: 'Feedback' };
