import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Table from './Table';

export default {
  title: "Pagina's/Experimenteel/Algemeen/Table",
  component: Table,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Table>;
type Story = StoryObj<typeof Table>;

export const Default: Story = { name: 'Table' };
