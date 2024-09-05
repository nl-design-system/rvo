import type { Meta, StoryObj } from '@storybook/react';
import Report from './Report';

const meta: Meta<typeof Report> = {
  title: "Pagina's/Voorbeelden/Algemeen/Report",
  component: Report,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Report>;

export const Default: Story = { name: 'Report' };
