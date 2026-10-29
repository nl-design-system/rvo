import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Splash from './Splash';

export default {
  title: "Pagina's/Experimenteel/de Regelmaat/Splash",
  component: Splash,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
} satisfies Meta<typeof Splash>;
type Story = StoryObj<typeof Splash>;

export const Default: Story = { name: 'Splash' };
