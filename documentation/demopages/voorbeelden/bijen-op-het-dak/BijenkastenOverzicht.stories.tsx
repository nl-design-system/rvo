import type { Meta, StoryObj } from '@storybook/react-webpack5';
import BijenkastenOverzicht from './BijenkastenOverzicht';

export default {
  title: "Pagina's/Voorbeelden/Bijen op het dak/Bijenkasten",
  component: BijenkastenOverzicht,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof BijenkastenOverzicht>;
type Story = StoryObj<typeof BijenkastenOverzicht>;

export const Default: Story = { name: 'Bijenkasten' };
