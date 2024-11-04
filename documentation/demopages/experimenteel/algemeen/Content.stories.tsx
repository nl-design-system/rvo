import type { Meta, StoryObj } from '@storybook/react';
import Content from './Content';

const meta: Meta<typeof Content> = {
  title: "Pagina's/Experimenteel/Algemeen/Content",
  component: Content,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Content>;

export const Default: Story = { name: 'Content' };
