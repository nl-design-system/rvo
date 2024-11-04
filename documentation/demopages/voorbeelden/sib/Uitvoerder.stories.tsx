import type { Meta, StoryObj } from '@storybook/react';
import Uitvoerder from './Uitvoerder';

const meta: Meta<typeof Uitvoerder> = {
  title: "Pagina's/Voorbeelden/SIB/Uitvoerder",
  component: Uitvoerder,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Uitvoerder>;

export const Default: Story = { name: 'Uitvoerder' };
