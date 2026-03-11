import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ExpendableRows from './ExpendableRows';

const meta: Meta<typeof ExpendableRows> = {
  title: "Pagina's/Experimenteel/Algemeen/Expendable Rows",
  component: ExpendableRows,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ExpendableRows>;

export const Default: Story = { name: 'Expendable Rows' };
