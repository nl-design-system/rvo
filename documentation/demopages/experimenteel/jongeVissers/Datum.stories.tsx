import type { Meta, StoryObj } from '@storybook/react';
import Datum from './Datum';

const meta: Meta<typeof Datum> = {
  title: "Pagina's/Experimenteel/Jonge Vissers/Datum",
  component: Datum,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Datum>;

export const Default: Story = { name: 'Datum' };
