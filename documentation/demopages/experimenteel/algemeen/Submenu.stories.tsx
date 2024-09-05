import type { Meta, StoryObj } from '@storybook/react';
import Submenu from './Submenu';

const meta: Meta<typeof Submenu> = {
  title: "Pagina's/Experimenteel/Algemeen/Submenu",
  component: Submenu,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Submenu>;

export const Default: Story = { name: 'Submenu' };
