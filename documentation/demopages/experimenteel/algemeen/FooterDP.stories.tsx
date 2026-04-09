import type { Meta, StoryObj } from '@storybook/react-webpack5';
import FooterDP from './FooterDP';

export default {
  title: "Pagina's/Experimenteel/Algemeen/Footer",
  component: FooterDP,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof FooterDP>;
type Story = StoryObj<typeof FooterDP>;

export const Default: Story = { name: 'Footer' };
