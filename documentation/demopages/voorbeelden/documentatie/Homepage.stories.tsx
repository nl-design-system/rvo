import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Homepage from './Homepage';

const meta: Meta<typeof Homepage> = {
  title: "Pagina's/Voorbeelden/Documentatie/Homepage",
  component: Homepage,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Homepage>;

export const Default: Story = { name: 'Homepage' };
