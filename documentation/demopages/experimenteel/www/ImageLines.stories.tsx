import type { Meta, StoryObj } from '@storybook/react';
import ImageLines from './ImageLines';
import '../../common/imagelines.scss';

const meta: Meta<typeof ImageLines> = {
  title: "Pagina's/Experimenteel/www/Image Lines",
  component: ImageLines,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ImageLines>;

export const Default: Story = { name: 'Image Lines' };
