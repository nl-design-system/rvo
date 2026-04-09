import type { Meta, StoryObj } from '@storybook/react-webpack5';
import SubmenuGrid from './SubmenuGrid';

export default {
  title: "Pagina's/Experimenteel/Algemeen/Submenu grid",
  component: SubmenuGrid,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof SubmenuGrid>;
type Story = StoryObj<typeof SubmenuGrid>;

export const Default: Story = { name: 'Submenu grid' };
