import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ControlerenIndienen from './ControlerenIndienen';

export default {
  title: "Pagina's/Voorbeelden/Bijen op het dak/Controleren en versturen",
  component: ControlerenIndienen,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof ControlerenIndienen>;
type Story = StoryObj<typeof ControlerenIndienen>;

export const Default: Story = { name: 'Controleren en versturen' };
