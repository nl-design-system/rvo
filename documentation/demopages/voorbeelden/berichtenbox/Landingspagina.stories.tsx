import type { Meta, StoryObj } from '@storybook/react';
import Landingspagina from './Landingspagina';

const meta: Meta<typeof Report> = {
  title: "Pagina's/Voorbeelden/Berichtenbox/Landingspagina",
  component: Landingspagina,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Landingspagina>;

export const Default: Story = { name: 'Landingspagina' };
