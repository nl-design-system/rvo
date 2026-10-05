import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Submenu from './Submenu';

export default {
  title: "Pagina's/Experimenteel/Algemeen/Submenu",
  component: Submenu,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Submenu>;
type Story = StoryObj<typeof Submenu>;

export const Default: Story = { name: 'Submenu' };
