import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Feedback from './Feedback';

export default {
  title: 'Prototypes/www/Feedback',
  component: Feedback,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Feedback>;
type Story = StoryObj<typeof Feedback>;

export const Default: Story = { name: 'Feedback' };
