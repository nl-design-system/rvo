import type { Meta, StoryObj } from '@storybook/react';
import Aanvragen from './Aanvragen';

const meta: Meta<typeof Aanvragen> = {
  title: "Pagina's/Voorbeelden/CMOR/Aanvragen",
  component: Aanvragen,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Aanvragen>;

export const Default: Story = { name: 'Aanvragen' };
