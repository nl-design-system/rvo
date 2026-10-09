import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Alerts from './Alerts';

export default {
  title: "Pagina's/Experimenteel/Algemeen/Alerts",
  component: Alerts,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Alerts>;
type Story = StoryObj<typeof Alerts>;

export const Default: Story = { name: 'Alerts' };
