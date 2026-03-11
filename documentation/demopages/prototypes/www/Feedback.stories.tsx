import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Feedback from './Feedback';

const meta: Meta<typeof Feedback> = {
  title: 'Prototypes/www/Feedback',
  component: Feedback,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Feedback>;

export const Default: Story = { name: 'Feedback' };
