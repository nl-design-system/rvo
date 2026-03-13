/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import InloggenVoorIemandAnders from './InloggenVoorIemandAnders';

const meta: Meta<typeof InloggenVoorIemandAnders> = {
  title: "Pagina's/Voorbeelden/Inloggen/Inloggen voor iemand anders",
  component: InloggenVoorIemandAnders,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof InloggenVoorIemandAnders>;

export const Default: Story = { name: 'Inloggen voor iemand anders' };
