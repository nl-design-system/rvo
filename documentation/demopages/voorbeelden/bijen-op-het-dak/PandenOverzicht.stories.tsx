import type { Meta, StoryObj } from '@storybook/react-webpack5';
import PandenOverzicht from './PandenOverzicht';

export default {
  title: "Pagina's/Voorbeelden/Bijen op het dak/Panden",
  component: PandenOverzicht,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof PandenOverzicht>;
type Story = StoryObj<typeof PandenOverzicht>;

export const Default: Story = { name: 'Panden' };
