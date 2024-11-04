import type { Meta, StoryObj } from '@storybook/react';
import Relatienummer from './Relatienummer';

const meta: Meta<typeof Relatienummer> = {
  title: "Pagina's/Experimenteel/Algemeen/Relatienummer",
  component: Relatienummer,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Relatienummer>;

export const Default: Story = { name: 'Relatienummer' };
