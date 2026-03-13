import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Zoeken from './Zoeken';

export default {
  title: "Pagina's/Experimenteel/de Regelmaat/Zoeken",
  component: Zoeken,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
} satisfies Meta<typeof Zoeken>;
type Story = StoryObj<typeof Zoeken>;

export const Default: Story = { name: 'Zoeken' };
