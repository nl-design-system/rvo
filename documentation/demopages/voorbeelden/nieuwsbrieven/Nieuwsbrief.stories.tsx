import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Nieuwsbrief from './Nieuwsbrief';

const meta: Meta<typeof Nieuwsbrief> = {
  title: "Pagina's/Voorbeelden/nieuwsbrieven/Nieuwsbrief",
  component: Nieuwsbrief,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Nieuwsbrief>;

export const Default: Story = { name: 'Nieuwsbrief' };
