import type { Meta, StoryObj } from '@storybook/react';
import FiltersPersonen from './FiltersPersonen';

const meta: Meta<typeof FiltersPersonen> = {
  title: "Pagina's/Experimenteel/Algemeen/Filters (Adviseurs)",
  component: FiltersPersonen,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof FiltersPersonen>;

export const Default: Story = { name: 'Filters (Adviseurs)' };
