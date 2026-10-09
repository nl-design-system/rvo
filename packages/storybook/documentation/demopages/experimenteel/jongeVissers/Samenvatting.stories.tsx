import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Samenvatting from './Samenvatting';

export default {
  title: "Pagina's/Experimenteel/Jonge Vissers/Samenvatting",
  component: Samenvatting,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Samenvatting>;
type Story = StoryObj<typeof Samenvatting>;

export const Default: Story = { name: 'Samenvatting' };
