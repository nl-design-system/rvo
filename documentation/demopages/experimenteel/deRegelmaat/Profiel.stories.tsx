import type { Meta, StoryObj } from '@storybook/react';
import Profiel from './Profiel';

const meta: Meta<typeof Profiel> = {
  title: "Pagina's/Experimenteel/de Regelmaat/Profiel",
  component: Profiel,
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

type Story = StoryObj<typeof Profiel>;

export const Default: Story = { name: 'Profiel' };
