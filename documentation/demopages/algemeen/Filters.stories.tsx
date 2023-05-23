import type { Meta, StoryObj } from '@storybook/react';
import Filters from './Filters';

const meta: Meta<typeof Filters> = {
  title: "Demo pagina's/Algemeen/Filters (Energielijst)",
  component: Filters,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Filters>;

export const Default: Story = { name: 'Filters (Energielijst)' };
