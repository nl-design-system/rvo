import type { Meta, StoryObj } from '@storybook/react';
import Alerts from './Alerts';

const meta: Meta<typeof Alerts> = {
  title: "Pagina's/Experimenteel/Algemeen/Alerts",
  component: Alerts,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Alerts>;

export const Default: Story = { name: 'Alerts' };
