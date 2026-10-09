import type { Meta, StoryObj } from '@storybook/react-webpack5';
import DatalistCard from './DatalistCard';

export default {
  title: "Pagina's/Experimenteel/Algemeen/Datalist Card",
  component: DatalistCard,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof DatalistCard>;
type Story = StoryObj<typeof DatalistCard>;

export const Default: Story = { name: 'Datalist Card' };
