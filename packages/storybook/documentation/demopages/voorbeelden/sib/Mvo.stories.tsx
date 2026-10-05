import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Mvo from './Mvo';

export default {
  title: "Pagina's/Voorbeelden/SIB/Mvo",
  component: Mvo,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Mvo>;
type Story = StoryObj<typeof Mvo>;

export const Default: Story = { name: 'Mvo' };
