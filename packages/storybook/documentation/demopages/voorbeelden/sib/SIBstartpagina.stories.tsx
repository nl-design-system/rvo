import type { Meta, StoryObj } from '@storybook/react-webpack5';
import SIBstartpagina from './SIBstartpagina';

export default {
  title: "Pagina's/Voorbeelden/SIB/Startpagina",
  component: SIBstartpagina,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof SIBstartpagina>;
type Story = StoryObj<typeof SIBstartpagina>;

export const Default: Story = { name: 'Startpagina' };
