import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ImageLines from './ImageLines';

export default {
  title: "Pagina's/Voorbeelden/www/Image lines",
  component: ImageLines,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof ImageLines>;
type Story = StoryObj<typeof ImageLines>;

export const Default: Story = { name: 'ImageLines' };
