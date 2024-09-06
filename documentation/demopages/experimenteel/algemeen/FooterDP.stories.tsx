import type { Meta, StoryObj } from '@storybook/react';
import FooterDP from './FooterDP';

const meta: Meta<typeof FooterDP> = {
  title: "Pagina's/Experimenteel/Algemeen/Footer",
  component: FooterDP,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof FooterDP>;

export const Default: Story = { name: 'Footer' };
