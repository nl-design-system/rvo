import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Bewaard from './Bewaard';

export default {
  title: "Pagina's/Experimenteel/de Regelmaat/Bewaard",
  component: Bewaard,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
} satisfies Meta<typeof Bewaard>;
type Story = StoryObj<typeof Bewaard>;

export const Default: Story = { name: 'Bewaard' };
