import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Event from './Event';

export default {
  title: "Pagina's/Voorbeelden/www/Event",
  component: Event,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Event>;
type Story = StoryObj<typeof Event>;

export const Default: Story = { name: 'Event' };
