import type { Meta, StoryObj } from '@storybook/react';
import Bijlagen from './Bijlagen';

const meta: Meta<typeof Bijlagen> = {
  title: "Pagina's/Experimenteel/Jonge Vissers/Bijlagen",
  component: Bijlagen,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Bijlagen>;

export const Default: Story = { name: 'Bijlagen' };
