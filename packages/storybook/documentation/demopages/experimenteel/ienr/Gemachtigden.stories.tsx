import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Gemachtigden from './Gemachtigden';

export default {
  title: "Pagina's/Experimenteel/I&R/Gemachtigden",
  component: Gemachtigden,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Gemachtigden>;
type Story = StoryObj<typeof Gemachtigden>;

export const Default: Story = { name: 'Gemachtigden' };
