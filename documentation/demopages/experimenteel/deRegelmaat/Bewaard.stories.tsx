import type { Meta, StoryObj } from '@storybook/react';
import Bewaard from './Bewaard';

const meta: Meta<typeof Bewaard> = {
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
};
export default meta;

type Story = StoryObj<typeof Bewaard>;

export const Default: Story = { name: 'Bewaard' };
