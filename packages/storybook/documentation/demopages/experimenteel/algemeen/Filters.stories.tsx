import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Filters from './Filters';

export default {
  title: "Pagina's/Experimenteel/Algemeen/Filters (Energielijst)",
  component: Filters,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Filters>;
type Story = StoryObj<typeof Filters>;

export const Default: Story = { name: 'Filters (Energielijst)' };
