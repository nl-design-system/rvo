import type { Meta, StoryObj } from '@storybook/react';
import Zaakgegevens from './Zaakgegevens';

const meta: Meta<typeof Zaakgegevens> = {
  title: "Demo pagina's/SIB/Zaakgegevens",
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
