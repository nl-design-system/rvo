import type { Meta, StoryObj } from '@storybook/react-webpack5';
import PercelenTable from './PercelenTable';

export default {
  title: "Pagina's/Experimenteel/Mijn Percelen/PercelenTabel",
  component: PercelenTable,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof PercelenTable>;
type Story = StoryObj<typeof PercelenTable>;

export const Default: Story = { name: 'PercelenTabel' };
