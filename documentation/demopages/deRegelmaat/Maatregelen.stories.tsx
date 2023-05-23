import type { Meta, StoryObj } from '@storybook/react';
import Maatregelen from './Maatregelen';

const meta: Meta<typeof Maatregelen> = {
  title: "Demo pagina's/de Regelmaat/Maatregelen",
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
