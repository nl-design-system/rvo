import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Uitvoerder from './Uitvoerder';

export default {
  title: "Pagina's/Voorbeelden/SIB/Uitvoerder",
  component: Uitvoerder,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Uitvoerder>;
type Story = StoryObj<typeof Uitvoerder>;

export const Default: Story = { name: 'Uitvoerder' };
