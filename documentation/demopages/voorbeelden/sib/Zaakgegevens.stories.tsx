import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Zaakgegevens from './Zaakgegevens';

export default {
  title: "Pagina's/Voorbeelden/SIB/Zaakgegevens",
  component: Zaakgegevens,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Zaakgegevens>;
type Story = StoryObj<typeof Zaakgegevens>;

export const Default: Story = { name: 'Zaakgegevens' };
