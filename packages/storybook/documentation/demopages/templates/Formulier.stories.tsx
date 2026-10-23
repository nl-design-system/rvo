import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Formulier from './Formulier';

export default {
  title: "Pagina's/Templates/Formulier",
  component: Formulier,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Report>;
type Story = StoryObj<typeof Formulier>;

export const Default: Story = { name: 'Formulier' };
