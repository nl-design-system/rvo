import type { Meta, StoryObj } from '@storybook/react-webpack5';
import PandWijzigen from './PandWijzigen';

export default {
  title: "Pagina's/Voorbeelden/Bijen op het dak/Pand wijzigen",
  component: PandWijzigen,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof PandWijzigen>;
type Story = StoryObj<typeof PandWijzigen>;

export const Default: Story = { name: 'Pand wijzigen' };
