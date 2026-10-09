import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Datum from './Datum';

export default {
  title: "Pagina's/Experimenteel/Jonge Vissers/Datum",
  component: Datum,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Datum>;
type Story = StoryObj<typeof Datum>;

export const Default: Story = { name: 'Datum' };
