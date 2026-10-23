import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Kosten from './Kosten';

export default {
  title: "Pagina's/Experimenteel/Jonge Vissers/Kosten",
  component: Kosten,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Kosten>;
type Story = StoryObj<typeof Kosten>;

export const Default: Story = { name: 'Kosten' };
