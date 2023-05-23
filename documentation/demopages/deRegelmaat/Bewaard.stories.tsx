import type { Meta, StoryObj } from '@storybook/react';
import Bewaard from './Bewaard';

const meta: Meta<typeof Bewaard> = {
  title: "Demo pagina's/de Regelmaat/Bewaard",
  component: Bewaard,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Bewaard>;

export const Default: Story = { name: 'Bewaard' };
