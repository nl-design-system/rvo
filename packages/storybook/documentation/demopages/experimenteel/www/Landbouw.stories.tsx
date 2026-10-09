import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Landbouw from './Landbouw';

export default {
  title: "Pagina's/Experimenteel/www/Landbouw",
  component: Landbouw,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Landbouw>;
type Story = StoryObj<typeof Landbouw>;

export const Default: Story = { name: 'Landbouw' };
