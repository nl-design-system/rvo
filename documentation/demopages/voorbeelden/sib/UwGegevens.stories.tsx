import type { Meta, StoryObj } from '@storybook/react';
import UwGegevens from './UwGegevens';

const meta: Meta<typeof UwGegevens> = {
  title: "Pagina's/Voorbeelden/SIB/Uw gegevens",
  component: UwGegevens,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof UwGegevens>;

export const Default: Story = { name: 'Uw gegevens' };
