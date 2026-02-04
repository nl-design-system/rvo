import type { Meta, StoryObj } from '@storybook/react';
import Gemachtigden from './Gemachtigden';

const meta: Meta<typeof Gemachtigden> = {
  title: "Pagina's/Experimenteel/I&R/Gemachtigden",
  component: Gemachtigden,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Gemachtigden>;

export const Default: Story = { name: 'Gemachtigden' };
