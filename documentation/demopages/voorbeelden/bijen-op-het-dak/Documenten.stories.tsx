import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Documenten from './Documenten';

export default {
  title: "Pagina's/Voorbeelden/Bijen op het dak/Documenten",
  component: Documenten,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Documenten>;
type Story = StoryObj<typeof Documenten>;

export const Default: Story = { name: 'Documenten' };
