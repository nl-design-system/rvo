import type { Meta, StoryObj } from '@storybook/react';
import PercelenTable from './PercelenTable';

const meta: Meta<typeof PercelenTable> = {
  title: "Pagina's/Experimenteel/Mijn Percelen/PercelenTabel",
  component: PercelenTable,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof PercelenTable>;

export const Default: Story = { name: 'PercelenTabel' };
