import type { Meta, StoryObj } from '@storybook/react';
import Splash from './Splash';

const meta: Meta<typeof Splash> = {
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
};
export default meta;

type Story = StoryObj<typeof Splash>;

export const Default: Story = { name: 'Splash' };
