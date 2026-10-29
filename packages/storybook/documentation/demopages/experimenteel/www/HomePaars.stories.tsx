import type { Meta, StoryObj } from '@storybook/react-webpack5';
import HomePaars from './HomePaars';

export default {
  title: "Pagina's/Experimenteel/www/kleurvariaties/Home (paars)",
  component: HomePaars,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof HomePaars>;
type Story = StoryObj<typeof HomePaars>;

export const Default: Story = { name: 'Home (paars)' };
