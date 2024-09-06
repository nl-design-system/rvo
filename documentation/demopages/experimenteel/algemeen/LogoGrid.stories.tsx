import type { Meta, StoryObj } from '@storybook/react';
import LogoGrid from './LogoGrid';

const meta: Meta<typeof LogoGrid> = {
  title: "Pagina's/Experimenteel/Algemeen/Logo grid",
  component: LogoGrid,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof LogoGrid>;

export const Default: Story = { name: 'Logo grid' };
