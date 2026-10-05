import type { Meta, StoryObj } from '@storybook/react-webpack5';
import UwGegevens from './UwGegevens';

export default {
  title: "Pagina's/Voorbeelden/SIB/Uw gegevens",
  component: UwGegevens,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof UwGegevens>;
type Story = StoryObj<typeof UwGegevens>;

export const Default: Story = { name: 'Uw gegevens' };
