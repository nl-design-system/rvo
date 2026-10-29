import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Content from './Content';

export default {
  title: "Pagina's/Experimenteel/Algemeen/Content",
  component: Content,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Content>;
type Story = StoryObj<typeof Content>;

export const Default: Story = { name: 'Content' };
