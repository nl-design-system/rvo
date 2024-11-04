import type { Meta, StoryObj } from '@storybook/react';
import SubmenuGrid from './SubmenuGrid';

const meta: Meta<typeof SubmenuGrid> = {
  title: "Pagina's/Experimenteel/Algemeen/Submenu grid",
  component: SubmenuGrid,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof SubmenuGrid>;

export const Default: Story = { name: 'Submenu grid' };
