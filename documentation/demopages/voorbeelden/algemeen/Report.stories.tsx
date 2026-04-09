import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Report from './Report';

export default {
  title: "Pagina's/Voorbeelden/Algemeen/Report",
  component: Report,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Report>;
type Story = StoryObj<typeof Report>;

export const Default: Story = { name: 'Report' };
