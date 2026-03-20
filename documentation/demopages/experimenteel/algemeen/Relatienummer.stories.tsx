import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Relatienummer from './Relatienummer';

export default {
  title: "Pagina's/Experimenteel/Algemeen/Relatienummer",
  component: Relatienummer,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Relatienummer>;
type Story = StoryObj<typeof Relatienummer>;

export const Default: Story = { name: 'Relatienummer' };
