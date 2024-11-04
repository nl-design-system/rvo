import type { Meta, StoryObj } from '@storybook/react';
import Mvo from './Mvo';

const meta: Meta<typeof Mvo> = {
  title: "Pagina's/Voorbeelden/SIB/Mvo",
  component: Mvo,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Mvo>;

export const Default: Story = { name: 'Mvo' };
