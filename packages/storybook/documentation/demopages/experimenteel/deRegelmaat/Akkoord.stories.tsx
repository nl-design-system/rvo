import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Akkoord from './Akkoord';

export default {
  title: "Pagina's/Experimenteel/de Regelmaat/Akkoord",
  component: Akkoord,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
} satisfies Meta<typeof Akkoord>;
type Story = StoryObj<typeof Akkoord>;

export const Default: Story = { name: 'Akkoord' };
