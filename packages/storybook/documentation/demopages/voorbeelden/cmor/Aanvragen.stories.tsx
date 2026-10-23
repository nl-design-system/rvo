import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Aanvragen from './Aanvragen';

export default {
  title: "Pagina's/Voorbeelden/CMOR/Aanvragen",
  component: Aanvragen,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Aanvragen>;
type Story = StoryObj<typeof Aanvragen>;

export const Default: Story = { name: 'Aanvragen' };
