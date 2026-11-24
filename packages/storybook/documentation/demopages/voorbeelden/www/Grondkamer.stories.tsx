import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Grondkamer from './Grondkamer';

export default {
  title: "Pagina's/Voorbeelden/www/Grondkamer",
  component: Grondkamer,
  // Hidden from the sidebar, only reachable through a direct link
  tags: ['!dev'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Grondkamer>;
type Story = StoryObj<typeof Grondkamer>;

export const Default: Story = { name: 'Grondkamer' };
