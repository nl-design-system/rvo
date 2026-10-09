import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Training from './Training';

export default {
  title: "Pagina's/Voorbeelden/www/Training",
  component: Training,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Training>;
type Story = StoryObj<typeof Training>;

export const Default: Story = { name: 'Training' };
