import type { Meta, StoryObj } from '@storybook/react-webpack5';
import BijenkastToevoegen from './BijenkastToevoegen';

export default {
  title: "Pagina's/Voorbeelden/Bijen op het dak/Bijenkast toevoegen",
  component: BijenkastToevoegen,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof BijenkastToevoegen>;
type Story = StoryObj<typeof BijenkastToevoegen>;

export const Default: Story = { name: 'Bijenkast toevoegen' };
