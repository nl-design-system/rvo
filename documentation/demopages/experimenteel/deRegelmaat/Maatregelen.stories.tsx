import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Maatregelen from './Maatregelen';

const meta: Meta<typeof Maatregelen> = {
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
};
export default meta;

type Story = StoryObj<typeof Maatregelen>;

export const Default: Story = { name: 'Maatregelen' };
