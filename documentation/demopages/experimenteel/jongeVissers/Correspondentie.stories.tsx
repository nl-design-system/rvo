import type { Meta, StoryObj } from '@storybook/react';
import Correspondentie from './Correspondentie';

const meta: Meta<typeof Correspondentie> = {
  title: "Pagina's/Experimenteel/Jonge Vissers/Correspondentie",
  component: Correspondentie,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Correspondentie>;

export const Default: Story = { name: 'Correspondentie' };
