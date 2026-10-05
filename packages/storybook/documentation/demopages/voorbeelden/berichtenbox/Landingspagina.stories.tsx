import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Landingspagina from './Landingspagina';

export default {
  title: "Pagina's/Voorbeelden/Berichtenbox/Landingspagina",
  component: Landingspagina,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Report>;
type Story = StoryObj<typeof Landingspagina>;

export const Default: Story = { name: 'Landingspagina' };
