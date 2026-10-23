import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ExpendableRows from './ExpendableRows';

export default {
  title: "Pagina's/Experimenteel/Algemeen/Expendable Rows",
  component: ExpendableRows,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof ExpendableRows>;
type Story = StoryObj<typeof ExpendableRows>;

export const Default: Story = { name: 'Expendable Rows' };
