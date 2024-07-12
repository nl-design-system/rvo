import type { Meta, StoryObj } from '@storybook/react';
import FooterDP from './FooterDP';

const meta: Meta<typeof FooterDP> = {
  title: "Demo pagina's/Algemeen/Footer",
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
