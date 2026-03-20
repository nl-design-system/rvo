import type { Meta, StoryObj } from '@storybook/react-webpack5';
import LogoGrid from './LogoGrid';

export default {
  title: "Pagina's/Experimenteel/Algemeen/Logo grid",
  component: LogoGrid,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof LogoGrid>;
type Story = StoryObj<typeof LogoGrid>;

export const Default: Story = { name: 'Logo grid' };
