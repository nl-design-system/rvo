import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Bevestiging from './Bevestiging';

export default {
  title: "Pagina's/Voorbeelden/Bijen op het dak/Bevestiging",
  component: Bevestiging,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Bevestiging>;
type Story = StoryObj<typeof Bevestiging>;

export const Default: Story = { name: 'Bevestiging' };
