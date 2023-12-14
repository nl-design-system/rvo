import type { Meta, StoryObj } from '@storybook/react';
import Landbouw from './Landbouw';

const meta: Meta<typeof Landbouw> = {
  title: "Demo pagina's/www/Landbouw",
  component: Landbouw,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Landbouw>;

export const Default: Story = { name: 'Landbouw' };
