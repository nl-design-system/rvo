import type { Meta, StoryObj } from '@storybook/react';
import Zaak from './Zaak';

const meta: Meta<typeof Zaak> = {
  title: "Demo pagina's/Mijn RVO/Zaak",
  component: Zaak,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Zaak>;

export const Default: Story = { name: 'Zaak' };
