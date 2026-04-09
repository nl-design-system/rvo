import type { Meta, StoryObj } from '@storybook/react-webpack5';
import FiltersPersonen from './FiltersPersonen';

export default {
  title: "Pagina's/Experimenteel/Algemeen/Filters (Adviseurs)",
  component: FiltersPersonen,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof FiltersPersonen>;
type Story = StoryObj<typeof FiltersPersonen>;

export const Default: Story = { name: 'Filters (Adviseurs)' };
