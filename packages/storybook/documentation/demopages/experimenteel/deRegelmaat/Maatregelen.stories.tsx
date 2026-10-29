import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Maatregelen from './Maatregelen';

export default {
  title: "Pagina's/Experimenteel/de Regelmaat/Maatregelen",
  component: Maatregelen,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
} satisfies Meta<typeof Maatregelen>;
type Story = StoryObj<typeof Maatregelen>;

export const Default: Story = { name: 'Maatregelen' };
