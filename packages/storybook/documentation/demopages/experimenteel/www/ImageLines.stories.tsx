import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ImageLines from './ImageLines';
import '../../common/imagelines.scss';

export default {
  title: "Pagina's/Experimenteel/www/Image Lines",
  component: ImageLines,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof ImageLines>;
type Story = StoryObj<typeof ImageLines>;

export const Default: Story = { name: 'Image Lines' };
