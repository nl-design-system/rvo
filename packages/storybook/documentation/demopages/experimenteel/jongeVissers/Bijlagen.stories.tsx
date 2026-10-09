import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Bijlagen from './Bijlagen';

export default {
  title: "Pagina's/Experimenteel/Jonge Vissers/Bijlagen",
  component: Bijlagen,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Bijlagen>;
type Story = StoryObj<typeof Bijlagen>;

export const Default: Story = { name: 'Bijlagen' };
