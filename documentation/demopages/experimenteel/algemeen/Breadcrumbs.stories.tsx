import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: "Pagina's/Experimenteel/Algemeen/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = { name: 'Breadcrumbs' };
