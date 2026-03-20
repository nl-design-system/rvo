import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Focus from './Focus';

export default {
  title: "Pagina's/Experimenteel/Algemeen/Focus",
  component: Focus,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Focus>;
type Story = StoryObj<typeof Focus>;

export const Default: Story = { name: 'Focus' };
