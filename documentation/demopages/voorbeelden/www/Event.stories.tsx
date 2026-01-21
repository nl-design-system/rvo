import type { Meta, StoryObj } from '@storybook/react';
import Event from './Event';

const meta: Meta<typeof Event> = {
  title: "Pagina's/Voorbeelden/www/Event",
  component: Event,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Event>;

export const Default: Story = { name: 'Event' };
