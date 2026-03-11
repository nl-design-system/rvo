import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Zaakgegevens from './Zaakgegevens';

const meta: Meta<typeof Zaakgegevens> = {
  title: "Pagina's/Voorbeelden/SIB/Zaakgegevens",
  component: Zaakgegevens,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Zaakgegevens>;

export const Default: Story = { name: 'Zaakgegevens' };
