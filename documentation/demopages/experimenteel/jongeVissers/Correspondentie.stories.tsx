import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Correspondentie from './Correspondentie';

export default {
  title: "Pagina's/Experimenteel/Jonge Vissers/Correspondentie",
  component: Correspondentie,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Correspondentie>;
type Story = StoryObj<typeof Correspondentie>;

export const Default: Story = { name: 'Correspondentie' };
