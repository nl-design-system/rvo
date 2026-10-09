import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Homepage from './Homepage';

export default {
  title: "Pagina's/Voorbeelden/Documentatie/Homepage",
  component: Homepage,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Homepage>;
type Story = StoryObj<typeof Homepage>;

export const Default: Story = { name: 'Homepage' };
