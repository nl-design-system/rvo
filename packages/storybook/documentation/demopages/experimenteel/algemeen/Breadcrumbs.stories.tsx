import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Breadcrumbs from './Breadcrumbs';

export default {
  title: "Pagina's/Experimenteel/Algemeen/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Breadcrumbs>;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = { name: 'Breadcrumbs' };
