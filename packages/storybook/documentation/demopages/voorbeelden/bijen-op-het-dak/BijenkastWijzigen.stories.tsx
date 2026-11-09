import type { Meta, StoryObj } from '@storybook/react-webpack5';
import BijenkastWijzigen from './BijenkastWijzigen';

export default {
  title: "Pagina's/Voorbeelden/Bijen op het dak/Bijenkast wijzigen",
  component: BijenkastWijzigen,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof BijenkastWijzigen>;
type Story = StoryObj<typeof BijenkastWijzigen>;

export const Default: Story = { name: 'Bijenkast wijzigen' };
