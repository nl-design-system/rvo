import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Nieuwsbrief from './Nieuwsbrief';

export default {
  title: "Pagina's/Voorbeelden/nieuwsbrieven/Nieuwsbrief",
  component: Nieuwsbrief,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Nieuwsbrief>;
type Story = StoryObj<typeof Nieuwsbrief>;

export const Default: Story = { name: 'Nieuwsbrief' };
