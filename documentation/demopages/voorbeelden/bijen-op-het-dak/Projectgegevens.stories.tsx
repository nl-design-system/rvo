import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Projectgegevens from './Projectgegevens';

export default {
  title: "Pagina's/Voorbeelden/Bijen op het dak/Projectgegevens",
  component: Projectgegevens,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Projectgegevens>;
type Story = StoryObj<typeof Projectgegevens>;

export const Default: Story = { name: 'Projectgegevens' };
