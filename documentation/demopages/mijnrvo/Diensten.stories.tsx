import type { Meta, StoryObj } from '@storybook/react';
import Diensten from './Diensten';

const meta: Meta<typeof Diensten> = {
  title: "Demo pagina's/Mijn RVO/Diensten [HIDDEN]",
  component: Diensten,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Diensten>;

export const Default: Story = { name: 'Diensten [HIDDEN]' };
