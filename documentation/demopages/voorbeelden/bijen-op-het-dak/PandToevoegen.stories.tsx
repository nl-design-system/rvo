import type { Meta, StoryObj } from '@storybook/react-webpack5';
import PandToevoegen from './PandToevoegen';

export default {
  title: "Pagina's/Voorbeelden/Bijen op het dak/Pand toevoegen",
  component: PandToevoegen,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof PandToevoegen>;
type Story = StoryObj<typeof PandToevoegen>;

export const Default: Story = { name: 'Pand toevoegen' };
